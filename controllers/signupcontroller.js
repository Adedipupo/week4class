export const createSignup = async(req, res) => {
    try {
        const org = new Organization(req.body); 

        await org.save();
        res.json({
            message:"Organization created successfully",
            data: org
        })
    } catch (error) {
        console.error(error.message);
    }
}