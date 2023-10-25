
import Urls from "../atoms/urls";
import { Request } from "../atoms/Utils/Request";

export const PTRService = {
    search: (tenantId, filters = {}) => {
      return  Request({
        url: Urls.ptr.ptr_search,
        useCache: false,
        method: "POST",
        auth: true,
        userService: false,
        params: { tenantId, ...filters },
      })
    }
}