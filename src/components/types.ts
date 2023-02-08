

export interface IProduct{
    name: string,
    size: string,
    likes: number,
    uploadDate: Date,
    inWhichPrograms: string,
    extension: string,
    licenseType: string,
    productComments: null,
    userId: number,
    companyId: number,
    id: number,
    isDelete: boolean,
    dateCreated: Date
}

export interface INewAsset{
    name: string,
    size: string,
    uploadDate: Date,
    inWhichPrograms: string,
    extension: string,
    licenseType: string,
    userId: number,
    companyId: number,
    data:string,
    price:number,
    version:string,
    images_:any
}