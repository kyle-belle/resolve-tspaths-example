export interface FacebookOauthToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}

export interface FacebookTokenInspectResult {
    data: {
        app_id: string;
        type: string;
        application: string;
        expires_at: number;
        is_valid: boolean;
        issued_at: number;
        metadata: object;
        scopes: string[];
        user_id: string;
    }
}

export interface FacebookUserResult {
    id: string;
    email?: string;
    first_name: string;
    middle_name: string;
    short_name: string;
    name_format: string;
    name: string;
    last_name: string;
    picture: {
        data: {
          height: number;
          is_silhouette: boolean;
          url: string;
          width: 50
        }
    };
}