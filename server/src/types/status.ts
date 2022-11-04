export type AreaStatusType = {
    error: boolean;
    status: number;
    message: string;
};

export interface AreaAuthType extends AreaStatusType {
    token: string;
}
