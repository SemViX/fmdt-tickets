interface IHeaderItem{
    id:number
    label:string;
    link:string;
}

export const HEADER_ITEMS:IHeaderItem[]=[
    {id:0, label:"Про захід", link:"#about"},
    {id:1, label:"Як придбати", link:"#how-to-by"},
    {id:2, label:"Розіграш", link:"#giveaway"}
]