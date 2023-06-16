export const DEPENDENT_POC = {
  title: "PRESTASHOP_SIGNUP_TITLE",
  description: "PPRESTASHOP_SIGNUP_DESCRIPTION",
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  required: ["key", "url"],
  properties: {
    key: {
      type: "string",
      data: {
        title: "key",
        label: "PRESTASHOP_SIGNUP_LABEL_KEY",
        type: "textarea",
        default: ""
      },
      errMessages: {
        required: "Este campo no puede quedar vacío"
      }
    },
    url: {
      type: "string",
      data: {
        title: "url",
        label: "PRESTASHOP_SIGNUP_LABEL_URL",
        type: "input",
        default: ""
      },
      errMessages: {
        required: "Este campo no puede quedar vacío"
      }
    },
    stock_warehouse: {
      type: "string",
      data: {
        title: "stock_warehouse",
        label: "PRESTASHOP_SIGNUP_LABEL_STOCKWAREHOUSE",
        type: "select",
        default: "",
        options: {
          /* eslint-disable no-template-curly-in-string */
          url: "${baseurl}/options/stockwarehouse",
          metadata: {
            type: "MATCHING"
          }
        }
      }
    },
    stock_warehouse_option: {
      type: "string",
      data: {
        dependentOn: "stock_warehouse",
        title: "stock_warehouse_option",
        label: "PRESTASHOP_SIGNUP_LABEL_POC",
        type: "select",
        default: "",
        options: {
          url: "${baseurl}/options/${stockwarehouse}",
          metadata: {
            type: "MATCHING"
          }
        }
      }
    }
  }
}
