1. Autentikasi dan Otorisasi
Endpoint: /api/auth/login
Method: POST
Description: Untuk login pengguna dan menghasilkan token autentikasi.
<img width="1702" height="189" alt="image" src="https://github.com/user-attachments/assets/fdc26083-8373-41d9-8779-b79fdf69b2f4" />

2. Pengolaan Data Pengguna
- Menambah Pengguna
Endpoint: /api/users
Method: POST
Description: Untuk menambahkan data pengguna baru.
<img width="584" height="327" alt="image" src="https://github.com/user-attachments/assets/7e4a75b8-f8f4-4345-be64-1b0040ac41ad" />

- Mengubah Data Pengguna
Endpoint: /api/users/{id}
Method: PUT
Description: Untuk mengubah data pengguna.
<img width="584" height="331" alt="image" src="https://github.com/user-attachments/assets/eca90a4e-2c20-4f13-9c97-634f0063eeff" />

- Mengambil Data Pengguna
Endpoint: /api/users/{id}
Method: GET
Description: Mengambil data pengguna berdasarkan ID.
<img width="557" height="286" alt="image" src="https://github.com/user-attachments/assets/20deb9c1-91ca-4acc-abe6-866a1bbc85da" />

3. Pencatatan Presensi
- Melakukan Presensi
Endpoint: /api/attendance
Method: POST
Description: Untuk mencatat kehadiran pengguna pada hari tersebut.
<img width="595" height="309" alt="image" src="https://github.com/user-attachments/assets/d607f6a8-e02d-441d-8cff-0fe49fe9f0a5" />

- Melihat Riwayat Presensi Pengguna
Endpoint: /api/attendance/history/{user_id}
Method: GET
Description: Mengambil riwayat presensi pengguna berdasarkan ID pengguna.
<img width="671" height="362" alt="image" src="https://github.com/user-attachments/assets/9d606f91-0061-48b3-9594-5fae2f02419b" />

4. Analisis Kehadiran
- Melihat Rekap Kehadiran Bulanan
Endpoint: /api/attendance/summary/{user_id}
Method: GET
Description: Menampilkan rekap kehadiran bulanan pengguna.
<img width="1260" height="739" alt="image" src="https://github.com/user-attachments/assets/8581e107-f9a0-4037-ad07-cfdd5e530530" />

- Analisis Tingkat Kehadiran Berdasarkan Parameter Tertentu
Manajemen ingin mengetahui persentase kehadiran setiap pengguna berdasarkan parameter yang lebih spesifik, misalnya per periode tertentu. Manajemen juga ingin membandingkan tingkat kehadiran antar-kelompok, misalnya berdasarkan kelas atau jabatan, guna mengidentifikasi tren yang mungkin menunjukkan potensi masalah kedisiplinan.
Endpoint: /api/attendance/analysis
Method: POST
Description: Melakukan analisis tingkat kehadiran pengguna berdasarkan periode waktu dan kategori tertentu.
<img width="712" height="282" alt="image" src="https://github.com/user-attachments/assets/1d53db61-cf6d-4cc4-bb8c-3a00e9a12c24" />





