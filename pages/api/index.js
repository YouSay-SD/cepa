import Countries from "./countries";
import Modules from "./modules";

export const countries = new Countries('countries?populate=*')
// export const countries = new Countries('countries?populate[categoryTaxHaven][populate]=*')
export const aliquots = new Countries('aliquots?populate=*')
export const modules = new Modules('module?populate=*')
export const header = new Modules('header?populate=*')
export const footer = new Modules('footer?populate[socialMedia][populate]=*')
export const heroResp = new Modules('module?populate[hero][populate]=*')
export const ctaBottomResp = new Modules('module?populate[ctaBottom][populate]=*')
export const mapProposalResp = new Modules('module?populate[mapProposal][populate]=*')
export const mapProgressivityResp = new Modules('module?populate[mapProgressivity][populate]=*')
export const mapTaxHavensResp = new Modules('module?populate[mapTaxHavens][populate]=*')
export const aliquotCategories = new Modules('aliquot-categories')
export const aliquotCategoriesType = new Modules('aliquot-categories-type')
export const countryCategoriesTaxHavens = new Modules('country-categories-tax-havens?populate=*')

// Aliquots Page
export const aliquotsPage = new Modules('aliquots-page?populate=*')