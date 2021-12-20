import { generateTitle } from "../../../src/screens/categorydetails/CategoryDetails.ext";
import { getMockCategory } from "./mock/CategoryMockFactory";

describe('matching generateTitle()', () => {

    test('title should be valid, when category id and name are valid', () => {
        let category = getMockCategory();
        const title = generateTitle(category)
        expect(title).toBe("Abbreviations and Acronyms(1)");
    });

    test('title should be empty string, when category is undefined', () => {
        const title = generateTitle(undefined)
        expect(title).toBe("");
    });

});