import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
    try{

        const logggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id: {$ne: logggedInUserId } } ).select("-password");
        res.status(200).json(filteredUsers)

    }catch(error){
        console.error("Error in getUserForSidebar:", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}