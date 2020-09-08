import { ModelProdutos } from "./ModelProdutos";

export class ModelPedidoProdutos {
    SaleRequestProductsId: number;
    SaleRequestsId: number;
    ProductInternalCodeOnErp: string;
    Value: number;
    Quantity: number;
    Comments: string;
    UserId: number;
    PersonalizedCode: string;
    IsCancel: boolean;
    ProductsId: number;
    TotalLiquid: number;
    Products: ModelProdutos;
    IsDelivered: boolean;
}