export function  handleApiError(error,defaultMessage = "Sunucu Hatası"){
    console.error("API hatası: ",error);

    return Response.json(
        {
            success:false,
            message:defaultMessage,
            error:process.env.NODE_ENV === "development" ? error.message: undefined,
        },
        {
            status:500
        }
    );
}