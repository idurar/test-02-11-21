import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  Wrap,
  WrapItem,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  Search2Icon,
  QuestionOutlineIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

const RightHeader = () => {
  return (
    <div style={{ float: "right" }}>
      <Wrap>
        <WrapItem>
          <InputGroup>
            <InputLeftElement
              style={{ height: "32px" }}
              children={<Search2Icon w={4} h={4} color="grey.300" />}
            />

            <Input
              placeholder="Quick search"
              size="sm"
              borderRadius="md"
              style={{ width: "100%", maxWidth: "300px" }}
            />
          </InputGroup>
        </WrapItem>
        <WrapItem>
          <div style={{ height: "32px" }}>
            <QuestionOutlineIcon w={4} h={4} color="grey.300" />
          </div>
        </WrapItem>
        <WrapItem>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />{" "}
        </WrapItem>
      </Wrap>
    </div>
  );
};
export default function HeaderContent() {
  return (
    <div style={{ paddingBottom: "5px" }}>
      <div className="col_24 col_md_12 col_lg_12 header">
        <RightHeader />
      </div>
      <div className="col_24 col_md_12 col_lg_12 header">
        <Wrap>
          <WrapItem>
            <div style={{ height: "32px", marginLeft: "12px" }}>
              <HamburgerIcon w={4} h={4} color="grey.300" />
            </div>
          </WrapItem>
          <WrapItem>
            <div style={{ paddingTop: "3px" }}>
              <Breadcrumb fontWeight="medium" fontSize="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </WrapItem>
        </Wrap>
      </div>

      <div className="clearfix"></div>
    </div>
  );
}
