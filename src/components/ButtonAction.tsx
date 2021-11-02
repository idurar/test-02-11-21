import React from "react";
import {
  
  Wrap,
    WrapItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  
  PopoverArrow,
  PopoverCloseButton,
  
    Stack,
  Button,IconButton
} from "@chakra-ui/react";
import {
  
  ChevronUpIcon,
  
} from "@chakra-ui/icons";

import { CgViewList, CgSearch ,CgMathPlus} from "react-icons/cg"
import {BiFilterAlt,BiTimeFive,BiCloudDownload,BiSearch} from "react-icons/bi"

import FilterBox from "./FilterBox";

const RightHeader = () => {
  return (
    <div style={{ float: "right" }}>
      <Wrap>
       
        <WrapItem>
          <div style={{ height: "32px",paddingTop:"5px" }}>
            <ChevronUpIcon style={{ height: "24px" , float:"right" ,marginLeft:"10px"}}/>
            <BiSearch  style={{ height: "24px" , float:"right" ,marginLeft:"10px"}}/>
            <BiCloudDownload style={{ height: "24px" , float:"right" ,marginLeft:"10px"}}/>
          </div>
        </WrapItem>
      </Wrap>
    </div>
  );
};

const PopOverFilter = ({ children }) => {
    return ( 
    <Popover>
  <PopoverTrigger>
    { children }
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Filter!</PopoverHeader>
    <PopoverBody><FilterBox></FilterBox></PopoverBody>
  </PopoverContent>
</Popover>
    )
}
export default function ButtonAction() {
    return (
       <div
        style={{
          padding: "10px 0 5px",
          width: "100%",
          borderBottom: "1px solid #efefef",
        }}
      >
        <div className="col_24 col_md_12 col_lg_12 ">
        
      
                <Wrap>
                <WrapItem>
                    <div style={{ height: "32px" }}>
                    <Stack direction="row" spacing={2}>
                        <Button leftIcon={<CgViewList />} size="sm"  variant="ghost">
                            List
                        </Button>
                        <Button leftIcon={<CgSearch />} size="sm" variant="ghost">
                            Finding
                                </Button>
                          <PopOverFilter>
                        <Button leftIcon={<BiFilterAlt />} size="sm" variant="ghost">
                            Filter(5)
                                    </Button>
                                    </PopOverFilter>
                        <Button leftIcon={<BiTimeFive />} size="sm" variant="ghost">
                            Last week
                                    </Button>
                        <IconButton
                            aria-label="Search database"
                            size="sm" variant="ghost"
                            icon={<CgMathPlus />}
                            />
                    </Stack>
                    </div>
                </WrapItem>
               
                </Wrap>
            </div>
            <div className="col_24 col_md_12 col_lg_12">
                <RightHeader />
            </div>
        <div className="clearfix"></div>
      </div>
    
  );
}

