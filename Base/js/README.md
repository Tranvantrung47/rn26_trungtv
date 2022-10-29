# List
- Call API getListUser
- Add row vao tbody cua table

# Detail
- handle event o btn detail (truyen theo user.id)
- event : -> redirect trag web tu list -> detail
- detail.html -> getId o tren url 
- -> call API get User dua vao id -> call thanh cong 
- -> render info ra ngoai (JS DOM)

# Delete 
- handle event o btn delete (truyen theo user.id)
- event : 
+ Call API delete user
+ Delete thanh cong
+ Thuc hien update list User
    - Call API getListUser
    - Delete elm in list
# POST
- Get info input
- Call API create USER