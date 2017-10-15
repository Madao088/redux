export const selectUser = function(user){
    console.log(user.first);
    return {
        type:"USER_SELECTED",
        payload: user
    }
}   