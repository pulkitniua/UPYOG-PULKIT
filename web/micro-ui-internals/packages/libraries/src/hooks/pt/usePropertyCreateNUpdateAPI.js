import { PTService } from "../../services/elements/PT";
import { useMutation } from "react-query";
import { PTRService } from "../../services/elements/PTR";

const usePropertyCreateNUpdateAPI = (tenantId, update = false) => {
  let mutation = useMutation(async (data) => { 
    const createdProp = await PTService.create(data, tenantId)
    if(createdProp?.ResponseInfo && createdProp?.ResponseInfo?.status === "successful") {
      if(update) {
        await PTService.update(createdProp?.Properties[0], tenantId)
      }
    }
  });

  return mutation;
};


// const usePropertyCreateNUpdateAPI = (tenantId,filters={}) => {
//   // return useMutation(async (data)=> await PTRService.search(tenantId,data));
//   let mutation = useMutation(async (data) => { 
//      await PTRService.search(tenantId,data)
//     // if(createdProp?.ResponseInfo && createdProp?.ResponseInfo?.status === "successful") {
//     //   if(update) {
//     //     await PTService.update(createdProp?.Properties[0], tenantId)
//     //   }
//     // }
//   });

//   return mutation;
// };

export default usePropertyCreateNUpdateAPI;
