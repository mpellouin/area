export type AreaStatusType = {
    error: boolean,
    code: number,
    message: string,
};

export interface AreaAuthType extends AreaStatusType {
    token: string,
}