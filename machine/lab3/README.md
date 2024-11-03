## Basic Machinelearning 
### MỤC LỤC 

[1. Công Nghệ Sử Dụng](#CongNgheSuDung)

[2. Thuật Toán](#ThuatToan)

[3. Hiển Thị Kết Quả](#hienthiketqua)


<a name ="CongNgheSuDung"></a>
## 1. [Công Nghệ sữ dụng]
**`Numpy`**: Thư viện này được sử dụng để thực hiện các phép toán trên mảng `(arrays)` và là một trong những thư viện cơ bản cho khoa học dữ liệu và tính toán số. Cung cấp nhiều hàm và công cụ để xử lý dữ liệu.

**`Pandas`**: Thư viện mạnh mẽ này cho phép người dùng thao tác và phân tích dữ liệu một cách dễ dàng. Với khả năng đọc và ghi nhiều định dạng file khác nhau `(như .csv, .xls, .xlsx)`, **Pandas** là công cụ chủ chốt việc quản lý và phân tích dữ liệu.

**`Scikit-learn (sklearn)`**: Thư viện này cung cấp nhiều thuật toán học máy, công cụ cho việc chia dữ liệu `(train-test split)`, và đánh giá mô hình. Trong đoạn mã trên, `train_test_split` được sử dụng để chia tập dữ liệu thành tập huấn luyện `(train)` và tập kiểm tra `(test)`.

<a name ="ThuatToan"></a>
## 2. [Thuật Toán]
**[Tải dữ liệu]**: Hàm `loadCsv` trả về một Dataframe Pandas chứa dữ liệu

**[Huấn luyện và kiểm tra]**: Với hàm `splitTrainTest` thực hiện xáo trộn ngẫu nhiên chỉ mục của dữ liệu và chia thành hai phần: 
- Một phần cho huấn luyện (train)
- Một phần cho kiểm tra (test). 
- Tập huấn luyện được sử dụng để huấn luyện mô hình, trong khi tập kiểm tra dùng để đánh giá hiệu suất của mô hình.

**[Chia tập dữ liệu]**: Dữ liệu được chia ra và tìm kiếm nhờ hàm `splitTrainTest`. Trong đó, biến `target` là tên cột mà ta muốn dự đoán, với tham số `ratio` dùng để xác định tỉ lệ dữ liệu dùng cho tập kiểm tra.

**[Tính trung bình lớp]**: Hàm `mean_class` sử dụng phương pháp nhóm `(groupby)` tính toán trung bình của từng lớp trong biến mục tiêu. Có nghĩa là đối với mỗi lớp (chẳng hạn như các loại hoa trong tập dữ liệu Iris), hàm sẽ tính toán trung bình của các đặc trưng `(features)` khác.

**[Dự đoán bằng khoảng cách `Euclid`]**: Hàm `target_pred` sử dụng khoảng cách **Euclid** so sánh điểm dữ liệu trong tập kiểm tra với các trung bình lớp đã được tính toán. Khoảng cách Euclid giữa hai điểm trong không gian nhiều chiều một cách hiệu quả để đo độ tương đồng.

**[kết quả]**: Cuối cùng, các kết quả được dự đoán sẽ so sánh với các giá trị thực tế trong tập kiểm tra. Để dễ dàng thấy được độ chính xác của mô hình thông qua việc so sánh. 

<a name ="hienthiketqua"></a>
 ## 3. [Hiển Thị Kết Quả]

*Kết quả*
- Chạy thử code [centroid_pratice](https://github.com/DucThanh21/Machinelearning/blob/main/MachinelearningLab3/Centroid_practice.ipynb)

data = loadExcel('Iris.xls')

data

data_train, X_test, y_test = splitTrainTest(data, 'iris', ratio = 0.3)

print(data_train)

print(X_test)

print(y_test)


**Hàm bao gồm:** 
- Tải dữ liệu Iris và chia thành tập huấn luyện và kiểm tra.
- Tính toán giá trị trung bình cho mỗi lớp trong tập huấn luyện.
- Dự đoán lớp cho các mẫu trong tập kiểm tra.

![image](https://github.com/dvthai0711/thai/blob/main/anh4.png)

![image](https://github.com/dvthai0711/thai/blob/main/anh5.png)

- bài tập [KNN_BT1](https://github.com/dvthai0711/thai/blob/main/KNN_BT1-practice.ipynb).
- Bài tập [KNN_BT2](https://github.com/dvthai0711/thai/blob/main/KNN_BT2-practice.ipynb).



