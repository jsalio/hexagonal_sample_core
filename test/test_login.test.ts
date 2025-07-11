import { describe, it, expect, test, vi } from 'vitest';
import {IRequest,BaseRepository, IResponse} from '../src/contracts/IRequest'
import {Login} from '../src/models/dto/Login'
import {User, UserWithoutPwd} from '../src/models/db/User'
import {LoginUser} from '../src/usecase/LoginUser'
import { beforeEach } from 'node:test';

describe('User usecase test', ()=> {

    const mockBuild = vi.fn();
    const mockRequest: IRequest<Login> = { build: mockBuild };

    const mockRepository: BaseRepository<User, UserWithoutPwd> = {
        save: vi.fn((data: User) => ({ data: { ...data, createdAt: new Date() } })),
        update: vi.fn((data: User) => ({ data: { ...data, createdAt: new Date() } })),
        Select: vi.fn(() => ({ data: [] })),
        FindOne: vi.fn<(_field: keyof User, _value: User[keyof User]) => IResponse<UserWithoutPwd>>(),
        // FindOne: vi.fn().mockImplementation((field: keyof User, value: User[keyof User]) =>
        //   field === 'username' && value === 'testuser'
        //     ? { data: { Id: '1', username: 'testuser', active: true, password: '123', email: 'test@example.com', createdAt: new Date('2025-06-06') } as User }
        //     : { data: null, error: 'User not found' }
        // ),
        Delete: vi.fn(),
        IndexOf: vi.fn((field: keyof User, value: User[keyof User]) => 
          field === 'username' && value === 'testuser'
        ),
      };

      beforeEach(()=>{
        vi.clearAllMocks()
      })

    test('When request is null should fail',()=>{
        mockBuild.mockReturnValue(null)
        expect(mockRequest.build()).toBeNull();
        expect(mockBuild).toHaveBeenCalled();
    })

    test('When request is not null should pass',()=>{
        const login: Login = { username: 'test', password: '123' };
        mockBuild.mockReturnValue(login); // Cambia el valor retornado
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();
    })

    test('When create user case with should success', ()=>{
        mockBuild.mockReturnValue(null)
        expect(mockRequest.build()).toBeNull();
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)
    })

    test('when pass a null request to case should fail', () => {
        mockBuild.mockReturnValue(null)
        expect(mockRequest.build()).toBeNull();
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)

        let validations :Array<string> = loginusr.validate()

        expect(validations).length(1)
        expect(validations).contain('Invalid request')
    })

    test('When username is empty should fail', ()=> {
        const login: Login = { username: '', password: '123' };
        mockBuild.mockReturnValue(login); // Cambia el valor retornado
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest,mockRepository)
        expect(loginusr).instanceof(LoginUser)

        let validations :Array<string> = loginusr.validate()

        expect(validations).length(1)
        expect(validations).contain('Username is required')
    })

    test('When password is empty should fail', ()=> {
        const login: Login = { username: 'testuser', password: '' };
        mockBuild.mockReturnValue(login); // Cambia el valor retornado
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)

        let validations :Array<string> = loginusr.validate()

        expect(validations).length(1)
        expect(validations).contain('Password is required')
    })

    test('When username not exists should fail', ()=>{
        const login: Login = { username: '1234', password: '123' };
        mockBuild.mockReturnValue(login); // Cambia el valor retornado
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)

        let validations :Array<string> = loginusr.validate()

        expect(validations).length(1)
        expect(validations).contain('Account does not exist')
    })

    test('When Pass all correct check should pass', ()=> {
        const login: Login = { username: 'testuser', password: '123' };
        mockBuild.mockReturnValue(login); // Cambia el valor retornado
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)

        let validations :Array<string> = loginusr.validate()

        expect(validations).length(0)
    })

    test('Execute fail', ()=>{
        const login: Login = { username: 'testuserx', password: '123' };
        mockBuild.mockReturnValue(login);
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        mockRepository.FindOne = vi.fn().mockImplementation((field: keyof User, value: any) => {
            throw new Error("")
        })
    
        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)
    
        let validations :Array<string> = loginusr.validate()
        expect(validations).length(1)
    
        let result = loginusr.execute()
    
        // Use toEqual for deep equality check instead of equal
        expect(result).toEqual({
            error: "",
            data: null
        })
    })

    test('Execute Pass', ()=>{
        const login: Login = { username: 'testuser', password: '123' };
        mockBuild.mockReturnValue(login);
        expect(mockRequest.build()).toEqual(login);
        expect(mockBuild).toHaveBeenCalled();

        mockRepository.FindOne = vi.fn().mockImplementation((field: keyof User, value: any) => {
            if (field === 'username' && value === 'testuser') {
                return { 
                    data: { 
                        Id: '1', 
                        username: 'testuser', 
                        active: true, 
                        password: '123', 
                        email: 'test@example.com', 
                        createdAt: new Date('2025-06-06') 
                    } 
                };
            }
            return { data: null, error: 'User not found' };
        });
    
        let loginusr = new LoginUser(mockRequest, mockRepository)
        expect(loginusr).instanceof(LoginUser)
    
        let validations :Array<string> = loginusr.validate()
        expect(validations).length(0)
    
        let result = loginusr.execute()
    
        // Use toEqual for deep equality check instead of equal
        expect(result).toEqual({
            error: "",
            data: { 
                Id: '1', 
                username: 'testuser', 
                active: true, 
                email: 'test@example.com', 
                createdAt: expect.any(Date)  // Use expect.any(Date) to match any Date object
            }
        })
    })


})