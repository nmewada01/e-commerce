import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { updateData } from "../redux/DataReducer/action";
import { EditIcon, Icon } from "@chakra-ui/icons";

export function AdminUpdate({ id, products, dispatch, getData }) {
  const [productName, setProductName] = useState("");
  const [productGender, setProductGender] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName && productGender && productCategory && productPrice) {
      const payload = {
        name: productName,
        gender: productGender,
        category: productCategory,
        final_price: productPrice,
      };
      dispatch(updateData(id, payload)).then(() => {
        dispatch(getData());
      });
    }
    setProductCategory("");
    setProductGender("");
    setProductName("");
    setProductPrice("");
  };

  useEffect(() => {
    if (id) {
      const currentProducts = products.find((item) => item.id === id);
      if (currentProducts) {
        setProductName(currentProducts.name);
        setProductGender(currentProducts.gender);
        setProductCategory(currentProducts.category);
        setProductPrice(currentProducts.final_price);
      }
    }
  }, [id, products]);
  return (
    <>
      <Button onClick={onOpen}>
        <Icon as={EditIcon} />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
              <FormLabel>Gender</FormLabel>
              <Input
                placeholder="Gender"
                onChange={(e) => setProductGender(e.target.value)}
                value={productGender}
              />
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Category"
                onChange={(e) => setProductCategory(e.target.value)}
                value={productCategory}
              />
              <FormLabel>Price</FormLabel>
              <Input
                placeholder="Price"
                onChange={(e) => setProductPrice(e.target.value)}
                value={productPrice}
              />

              <ModalFooter>
                <Button bg={"black"} color={"white"} mr={3} type="submit">
                  Update
                </Button>
                <Button bg={"black"} color={"white"} mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
