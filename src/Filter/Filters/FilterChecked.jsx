import { Accordion, Heading, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import FilterVarg from "../FilterComponents/FilterVarg";
const FilterChecked = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParams = searchParams.getAll("category");
  const initialGenderParams = searchParams.getAll("gender");
  const initialColorTypeParams = searchParams.getAll("colortype");
  const initialSizesParams = searchParams.getAll("sizes");
  const [theCategory, setTheCategory] = useState(initialCategoryParams || []);
  const [theGender, setTheGender] = useState(initialGenderParams || []);
  const [theSizes, setTheSizes] = useState(initialSizesParams || []);
  const [theColorType, setTheColorType] = useState(
    initialColorTypeParams || []
  );

  const handleCategoryChange = (e) => {
    const typeOutput = e.target.value;
    let newCategory = [...theCategory];
    if (theCategory.includes(typeOutput)) {
      newCategory.splice(newCategory.indexOf(typeOutput), 1);
    } else {
      newCategory.push(typeOutput);
    }
    setTheCategory(newCategory);
  };

  const handleGenderChange = (e) => {
    const typeOutput = e.target.value;
    let newGender = [...theGender];
    if (theGender.includes(typeOutput)) {
      newGender.splice(newGender.indexOf(typeOutput), 1);
    } else {
      newGender.push(typeOutput);
    }
    setTheGender(newGender);
  };

  const handleColorTypeChange = (e) => {
    const typeOutput = e.target.value;
    let newColorType = [...theColorType];
    if (theColorType.includes(typeOutput)) {
      newColorType.splice(newColorType.indexOf(typeOutput), 1);
    } else {
      newColorType.push(typeOutput);
    }
    setTheColorType(newColorType);
  };
  const handleSizesChange = (e) => {
    const typeOutput = e.target.value;
    let newSizes = [...theSizes];
    if (theSizes.includes(typeOutput)) {
      newSizes.splice(newSizes.indexOf(typeOutput), 1);
    } else {
      newSizes.push(typeOutput);
    }
    setTheSizes(newSizes);
  };

  useEffect(() => {
    if (theCategory || theGender || theColorType || theSizes) {
      setSearchParams({
        category: theCategory,
        gender: theGender,
        colortype: theColorType,
        sizes: theSizes,
      });
    }
  }, [theColorType, setSearchParams, theGender, theCategory, theSizes]);
  return (
    <div>
      <Heading>
        <Flex>
          <FaFilter />
          Filter
        </Flex>
      </Heading>
      <Accordion allowMultiple>
        <FilterVarg
          title={"Category"}
          type="checkbox"
          item={["clothes", "shoes"]}
          FilterChange={handleCategoryChange}
          theCategory={theCategory}
        />
        <FilterVarg
          title={"Color"}
          type="checkbox"
          item={["black", "blue", "white", "red"]}
          FilterChange={handleColorTypeChange}
          theCategory={theColorType}
        />
        <FilterVarg
          title={"Gender"}
          type="checkbox"
          item={["MEN", "WOMEN"]}
          FilterChange={handleGenderChange}
          theCategory={theGender}
        />
        <FilterVarg
          title={"Size"}
          type="checkbox"
          item={["small", "medium", "large"]}
          FilterChange={handleSizesChange}
          theCategory={theSizes}
        />
      </Accordion>
    </div>
  );
};

export default FilterChecked;
