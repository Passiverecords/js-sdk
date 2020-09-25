/**
 * Addresses
 * Description: The Addresses API allows you to organize customer addresses. Addresses are a sub-resource of a Customer.
 * A Customer may have multiple addresses, such as home, work and neighbor. You are able to use a customer with an
 * implicitBearer token. This is recommend for client-side interactions. Or you can use a client_credentials Bearer
 * token. This is recommended for back end interactions.
 * DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/index.html
 */
import { Identifiable, Resource, ResourceList } from './core';
import { WithRequired } from './util';


/**
 * Core Address Base Interface
 * For custom flows, extend this interface
 * DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/catalog/addresss/index.html
 */
export interface AddressBase {
  type: 'address';
  first_name: string;
  last_name: string;
  name: string;
  phone_number: string
  instructions: string;
  company_name: string;
  line_1: string;
  line_2: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
}

export interface Address extends Identifiable, AddressBase {}

interface AddressEdit extends WithRequired<
  Address,
  'type' | 'first_name' | 'last_name' | 'line_1' | 'postcode' | 'county' | 'country'
> {}

/**
 * Address Endpoints
 * DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresss/index.html
 * Get DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/get-an-address.html
 * Get All DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/get-all-addresses.html
 * Create DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/create-an-address.html
 * Update DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/update-an-address.html
 * Delete DOCS: https://documentation.elasticpath.com/commerce-cloud/docs/api/orders-and-customers/addresses/delete-an-address.html
 */
export interface AddressesEndpoint {
  endpoint: 'addresses';

  Get(options: { customer: string, address: string, token?: string }): Promise<Resource<Address>>;

  All(options: { customer: string, token?: string }): Promise<ResourceList<Address>>;

  Create(options: { customer: string, body: AddressEdit, token?: string }): Promise<Resource<Address>>;

  Update(options: { customer: string, address: string, body: Identifiable & AddressEdit, token?: string }): Promise<Resource<Address>>;

  Delete(options: { customer: string, address: string, token?: string }): Promise<{}>;
}
