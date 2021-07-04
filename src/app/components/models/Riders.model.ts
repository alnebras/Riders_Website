export interface RidersModel {
  id: number;
  full_name: string;
  license_no: string;
}

export interface dataModel {
  data: RidersModel[];
}
