export class ModelProduct {

    ProductsId: number;
    InternalCodeOnERP: number;
    EnterpriseId: number;
    PriceLookupCode: string;
    PersonalizedCode: string;
    EanCode: string;
    Name: string;
    NameReduced: string;
    PackingAbbreviation: string;
    PackingQuantity: number;
    SaleRetailPrice: number;
    OfferRetailPrice: number;
    WholeSalePrice: number;
    WholeOfferPrice: number;
    LiquidCost: number;
    LiquidCostMiddle: number;
    LiquidCostReal: number;
    RepositionCost: number;
    RepositionCostMiddle: number;
    RepositionCostReal: number;
    CFOP: string;
    FiscalClassificationNCM: string;
    TributarySituationCode: string;
    IcmsAliquot: number;
    IcmsIVAMargin: number;
    IcmsReductionMargin: number;
    IcmsStave: number;
    PercImpNBPTNational: number;
    PercImpNBPTState: number;
    PercImpNBPTMunicipal: number;
    CofinsPercentage: number;
    PisPercentage: number;
    CofinsType: number;
    PisType: number;
    CSTPisCofins: string;
    ProductIsFatherComposition: number;
    QuantityMinimumWholeSale: number;
    AllowFractionate: boolean;
    IsBalance: boolean;
    CanBeWeightyInPdv: boolean;
    QuantityInBalance: boolean;
    AllowQuantityInPdv: boolean;
    GoesForFastTable: boolean;
    IsAlcoholicProduct: boolean;
    BalanceTare: number;
    CodeClass: string;
    DepartmentCode: number;
    SectionCode: number;
    GroupCode: number;
    SubGroupCode: number;
    DateOfLastChanged: string;
    StockQuantity: number;
    SaleRetailPraticedString: number;

    /**                     
        public virtual string SaleRetailPraticedString
        {
            get
            {
                if (OfferRetailPrice > 0)
                    return OfferRetailPrice.ToString("N2");
                else if (SaleRetailPrice > 0)
                    return SaleRetailPrice.ToString("N2");
                else
                    return String.Empty;
            }
        }
     */
}
