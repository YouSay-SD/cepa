import Countries from "./countries";
import Modules from "./modules";

export const countries = new Countries('countries?populate=*')
export const aliquots = new Countries('aliquots?populate=*')
export const modules = new Modules('module?populate=*')
export const mapProposalResp = new Modules('module?populate[mapProposal][populate]=*')
export const mapProgressivityResp = new Modules('module?populate[mapProgressivity][populate]=*')
export const mapTaxHavensResp = new Modules('module?populate[mapTaxHavens][populate]=*')
export const aliquotCategories = new Modules('aliquot-categories')