import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Checkbox,
  Heading,
  Flex,
  FormLabel,
  Radio,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
const FilterData = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategoryParams = searchParams.getAll("category");
  const initialGenderParams = searchParams.getAll("gender");
  const initialColorTypeParams = searchParams.getAll("colortype");
  const initialSizesParams = searchParams.getAll("sizes");
  const initialSortParams = searchParams.get("sortBy");
  const [theCategory, setTheCategory] = useState(initialCategoryParams || []);
  const [theGender, setTheGender] = useState(initialGenderParams || []);
  const [theSizes, setTheSizes] = useState(initialSizesParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");
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

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (theCategory || theGender || theColorType || theSizes || sortBy) {
      setSearchParams({
        category: theCategory,
        gender: theGender,
        colortype: theColorType,
        sizes: theSizes,
        sortBy: sortBy,
      });
    }
  }, [theColorType, setSearchParams, theGender, theCategory, theSizes, sortBy]);
  return (
    <div>
      <Heading>
        <Flex>
          <FaFilter />
          Filter
        </Flex>
      </Heading>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="clothes"
                type="checkbox"
                onChange={handleCategoryChange}
                defaultChecked={theCategory.includes("clothes")}
              >
                Clothes
              </Checkbox>
              <Checkbox
                value="shoes"
                type="checkbox"
                onChange={handleCategoryChange}
                defaultChecked={theCategory.includes("shoes")}
              >
                Shoes
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="black"
                type="checkbox"
                onChange={handleColorTypeChange}
                defaultChecked={theColorType.includes("black")}
              >
                Black
              </Checkbox>
              <Checkbox
                value="red"
                type="checkbox"
                onChange={handleColorTypeChange}
                defaultChecked={theColorType.includes("red")}
              >
                Red
              </Checkbox>
              <Checkbox
                value="white"
                type="checkbox"
                onChange={handleColorTypeChange}
                defaultChecked={theColorType.includes("white")}
              >
                White
              </Checkbox>
              <Checkbox
                value="blue"
                type="checkbox"
                onChange={handleColorTypeChange}
                defaultChecked={theColorType.includes("blue")}
              >
                blue
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="MEN"
                type="checkbox"
                onChange={handleGenderChange}
                defaultChecked={theGender.includes("MEN")}
              >
                Men
              </Checkbox>
              <Checkbox
                value="WOMEN"
                type="checkbox"
                onChange={handleGenderChange}
                defaultChecked={theGender.includes("WOMEN")}
              >
                Women
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Rating
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column" onChange={handleSortBy}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <FormLabel>Ascending</FormLabel>
                <Radio
                  type="radio"
                  value="ASC"
                  defaultChecked={sortBy === "ASC"}
                />
              </Flex>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <FormLabel>Descending</FormLabel>
                <Radio
                  type="radio"
                  value="DESC"
                  defaultChecked={sortBy === "DESC"}
                />
              </Flex>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterData;

// SIZES SORT

/* <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Size
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5} direction="column">
              <Checkbox
                value="small"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("small")}
              >
                Small
              </Checkbox>
              <Checkbox
                value="medium"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("medium")}
              >
                Medium
              </Checkbox>
              <Checkbox
                value="large"
                type="checkbox"
                onChange={handleSizesChange}
                defaultChecked={theSizes.includes("large")}
              >
                Large
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem> */

// REVIEW SORT
/* <AccordionItem>
<h2>
  <AccordionButton>
    <Box flex="1" textAlign="left">
      reviews
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
  <Stack spacing={5} direction="column" onChange={handleSortBy}>
    <Radio
      type="radio"
      value="asc"
      defaultChecked={sortBy === "asc"}
    />
    <Radio
      type="radio"
      value="desc"
      defaultChecked={sortBy === "desc"}
    />
  </Stack>
</AccordionPanel>
</AccordionItem> */
