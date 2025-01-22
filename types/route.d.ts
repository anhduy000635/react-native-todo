type RootStackParamList = {
    Home: undefined;
    Details: {id:number, title:string, rating:number} | undefined;
};
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

declare module "*.png"