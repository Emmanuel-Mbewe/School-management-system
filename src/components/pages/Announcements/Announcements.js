import React from "react";
import AnnoucementsService from "./AnnouncementsService";
import { PostCard } from "../Posts/PostCard";

const Annoucements = () =>{
    return(
        <div>
            {/* <PostCard /> */}
            <AnnoucementsService />
        </div>
    )
}
export default Annoucements;