import Hooks from "@reactioncommerce/hooks";
import { Security } from "meteor/ongoworks:security";
import * as Collections from "../lib/collections";


const {
  JobFileRecords,
  JobItems,
  Mappings
} = Collections;

/**
 * @summary Adds security rule to plugin collections
 * @method
 * @return {Undefined} undefined
 */
export default function () {
  Security.permit(["insert", "update", "remove"])
    .collections([JobFileRecords, JobItems, Mappings])
    .ifHasRoleForActiveShop({ role: ["admin", "owner", "createProduct"] });
  Hooks.Events.run("afterSecurityInit");
}