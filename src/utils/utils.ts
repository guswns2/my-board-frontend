import {router} from "../router";
import {NavigationFailure} from "vue-router";

export const utils = {
    setRoute(name: string, params?: any) {
        console.log("############################ Route Name ############################");
        console.log(`ROUTER NAME : ${name}`);
        console.log(`ROUTER PARAMS : `, params);

        try {
            router.replace({ name: name, params: params });
        } catch (ex) {
            const error = ex as NavigationFailure;
            console.log("############################Route Error Catch############################");
            console.log(error);
            console.log("############################Home 으로 이동############################");
            utils.setRoute("layout");
        }
    }
}