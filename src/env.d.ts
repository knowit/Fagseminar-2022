/// <reference types="@astrojs/image/client" />
/// <reference types="svelte" />
/// <reference types="unplugin-icons/types/svelte" />

interface iCsvItem {
  [key: string]: any;
}

interface iCsv {
  csv: iCsvItem[];
}
declare module "*.csv" {
  const csv: iCsv;
  export default csv;
}
