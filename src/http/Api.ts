/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface SignUpDto {
  /** @example "John" */
  firstName: string;
  /** @example "Doe" */
  lastName: string;
  /** @example "johndoe@gmail.com" */
  email: string;
  /** @example "password" */
  password: string;
}

export interface SignInDto {
  /** @example "johndoe@gmail.com" */
  email: string;
  /** @example "password" */
  password: string;
}

export interface ForgotPasswordDto {
  /** @example "johndoe@gmail.com" */
  email: string;
}

export interface VerifyOTPDto {
  /** @example "johndoe@gmail.com" */
  email: string;
  /** @example "545748" */
  otp: number;
  type: "Forgot Password" | "Verify Email";
}

export interface ResetPasswordDto {
  /** @example "password" */
  password: string;
  /** @example "johndoe@gmail.com" */
  email: string;
  /** @example "password" */
  confirmPassword: string;
  /** @example "545748" */
  otp: number;
}

export interface CreateTaskDto {
  /** Title of the task */
  title: string;
  /** Detailed description of the task */
  description?: string;
  /**
   * Priority level of the task
   * @default "medium"
   */
  priority: "low" | "medium" | "high";
  /**
   * Deadline for the task
   * @format date-time
   */
  dueDate?: string;
  /**
   * Start date of the task
   * @format date-time
   */
  startDate?: string;
  /**
   * Whether the task is recurring
   * @default false
   */
  isRecurring: boolean;
  /** Recurrence type for the task */
  recurrenceType?: "daily" | "weekly" | "monthly" | "yearly";
  /** Category of the task */
  category?:
    | "work"
    | "personal"
    | "study"
    | "fitness"
    | "shopping"
    | "health"
    | "finance"
    | "travel"
    | "entertainment"
    | "household"
    | "social"
    | "project"
    | "urgent"
    | "other";
  /** Additional notes for the task */
  notes?: string;
}

export interface Task {
  /** @format date-time */
  createdAt: string;
  /** @format date-time */
  updatedAt: string;
  id: string;
  /** Title of the task */
  title: string;
  /** Detailed description of the task */
  description?: string;
  status: "pending" | "in-progress" | "completed" | "archived";
  priority: "low" | "medium" | "high";
  recurrenceType: "daily" | "weekly" | "monthly" | "yearly";
  /**
   * Deadline for the task
   * @format date-time
   */
  dueDate?: string;
  /**
   * Start date of the task
   * @format date-time
   */
  startDate?: string;
  /**
   * Completion timestamp of the task
   * @format date-time
   */
  completedAt?: string;
  /**
   * Whether the task is recurring
   * @default false
   */
  isRecurring: boolean;
  /** Category of the task */
  category?:
    | "work"
    | "personal"
    | "study"
    | "fitness"
    | "shopping"
    | "health"
    | "finance"
    | "travel"
    | "entertainment"
    | "household"
    | "social"
    | "project"
    | "urgent"
    | "other";
  /** Additional notes for the task */
  notes?: string;
}

export interface UpdateTaskDto {
  /** Title of the task */
  title?: string;
  /** Detailed description of the task */
  description?: string;
  /** Priority level of the task */
  priority?: "low" | "medium" | "high";
  /**
   * Deadline for the task
   * @format date-time
   */
  dueDate?: string;
  /**
   * Start date of the task
   * @format date-time
   */
  startDate?: string;
  /** Whether the task is recurring */
  isRecurring?: boolean;
  /** Recurrence type for the task */
  recurrenceType?: "daily" | "weekly" | "monthly" | "yearly";
  /** Category of the task */
  category?:
    | "work"
    | "personal"
    | "study"
    | "fitness"
    | "shopping"
    | "health"
    | "finance"
    | "travel"
    | "entertainment"
    | "household"
    | "social"
    | "project"
    | "urgent"
    | "other";
  /** Additional notes for the task */
  notes?: string;
}

export interface CreateStudentDTO {
  /**
   * @format date-time
   * @default null
   */
  dateOfBirth: string;
  /** @default null */
  gender: "Male" | "Female";
}

export interface UpdateStudentDTO {
  /** @default null */
  firstName: string;
  /** @default null */
  lastName: string;
  /** @default null */
  emailName: string;
  /** @default null */
  phoneNumber: string;
  /**
   * @format date-time
   * @default null
   */
  dateOfBirth: string;
  /** @default null */
  gender: "Male" | "Female";
  /** @default null */
  profilePicture: string;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title TN Nest App
 * @version 1.0.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags App
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  users = {
    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignUp
     * @request POST:/users/signUp
     */
    userControllerSignUp: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/signUp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerSignIn
     * @request POST:/users/sign-in
     */
    userControllerSignIn: (data: SignInDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerForgotPassword
     * @request POST:/users/forgot-Password
     */
    userControllerForgotPassword: (data: ForgotPasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/forgot-Password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerVerifyOtp
     * @request POST:/users/verify-otp
     */
    userControllerVerifyOtp: (data: VerifyOTPDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/verify-otp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerResetPassword
     * @request PATCH:/users/reset-Password
     */
    userControllerResetPassword: (data: ResetPasswordDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/reset-Password`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserControllerChangeAvatar
     * @request PATCH:/users/change-avatar
     */
    userControllerChangeAvatar: (
      data: {
        /** @format binary */
        photo?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/change-avatar`,
        method: "PATCH",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),
  };
  todos = {
    /**
     * No description
     *
     * @tags Tasks
     * @name TodoControllerCreate
     * @request POST:/todos
     */
    todoControllerCreate: (data: CreateTaskDto, params: RequestParams = {}) =>
      this.request<Task, any>({
        path: `/todos`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TodoControllerFindAll
     * @request GET:/todos
     */
    todoControllerFindAll: (params: RequestParams = {}) =>
      this.request<Task[], any>({
        path: `/todos`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TodoControllerFindOne
     * @request GET:/todos/{id}
     */
    todoControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Task, any>({
        path: `/todos/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TodoControllerUpdate
     * @request PATCH:/todos/{id}
     */
    todoControllerUpdate: (id: string, data: UpdateTaskDto, params: RequestParams = {}) =>
      this.request<Task, any>({
        path: `/todos/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tasks
     * @name TodoControllerDelete
     * @request DELETE:/todos/{id}
     */
    todoControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/todos/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
  student = {
    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerGetAllStudents
     * @request GET:/student
     */
    studentControllerGetAllStudents: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/student`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerCreate
     * @request POST:/student
     */
    studentControllerCreate: (data: CreateStudentDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/student`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerFindOne
     * @request GET:/student/{id}
     */
    studentControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/student/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerUpdate
     * @request PATCH:/student/{id}
     */
    studentControllerUpdate: (id: string, data: UpdateStudentDTO, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/student/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Student
     * @name StudentControllerDelete
     * @request DELETE:/student/{id}
     */
    studentControllerDelete: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/student/${id}`,
        method: "DELETE",
        ...params,
      }),
  };
}
