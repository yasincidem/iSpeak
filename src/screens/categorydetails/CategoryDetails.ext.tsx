import { GlobalRouteProp } from "../../../App.Router";
import { Category } from "../../types/Category";

export function generateTitle(category?: Category): string {
    if (!category) return ""
    return `${category.name}(${category.id})`
}

export const CategoryDetailsOptionsDecider = ({ route }: { route: GlobalRouteProp }) => ({ title: generateTitle(route.params) })