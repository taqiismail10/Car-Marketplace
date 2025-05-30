function createRandomCarList() {
  return [
    {
      name: "Toyota Camry",
      fuelType: "Petrol",
      model: "Camry",
      type: "Sedan",
      image: "https://imgs.search.brave.com/Zf65skeScmgBYYnhP4PVNMuBKuxbwQoMTQtYDnyuHYo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vWTIyNnk5/b3loUTkzLXB5Rmdw/RDNMNGVwc2YtSHRv/WXRUOC1BZGIzQkhs/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl3/YkdGMC9abTl5YlM1/amMzUmhkR2xqL0xX/bHRZV2RsY3k1amIy/MHYvYVc0dmRqSXZj/M1J2WTJ0Zi9jR2h2/ZEc5ekx6azFZekky/L1ptWTNMV1F5TldZ/dE5ESmovWVMxaU5H/Vm1MV1V4Wm1NeC9N/ak5tTVdJMU1TODBP/VE14L056TTVNeTFt/TVRJNUxUUTAvT1RB/dE9HVTFNUzAwTmpJ/eC9PVEprT0Roak9H/TXVjRzVu", // Toyota Camry
      miles: 25000,
      gearType: "Automatic",
      color: "White",
      price: 22000,
    },
    {
      name: "Honda Civic",
      fuelType: "Petrol",
      model: "Civic",
      type: "Sedan",
      image: "https://imgs.search.brave.com/V2k3TXQPNEsaSZYAkM8ygK1UWULzbuHp9DCGSX2V3qg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vbmJBQmFW/bEVobHJlWkhVdUR3/em9OWnNmZXZUMHRm/X05jNVZ4YUhLZXpV/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl3/YkdGMC9abTl5YlM1/amMzUmhkR2xqL0xX/bHRZV2RsY3k1amIy/MHYvYVc0dmRqSXZj/M1J2WTJ0Zi9jR2h2/ZEc5ekx6VTBNMlk0/L09XTmlMVFF4TVdZ/dE5HWTQvT0MwNE1q/UXhMVGsxWW1Fei9a/VGt3TnpKa1l5OHpO/amxtL05tVTVOeTFt/T0RKaUxUUTAvTUdR/dE9EYzFZaTAyT1Rn/eC9ZamN4WW1Ka05X/SXVjRzVu", // Honda Civic
      miles: 30000,
      gearType: "Manual",
      color: "Black",
      price: 18000,
    },
    {
      name: "Ford Mustang",
      fuelType: "Petrol",
      model: "Mustang",
      type: "Coupe",
      image: "https://imgs.search.brave.com/3ftQzQGaG7u1GYtSoVFPZHE53LQZ9e2I8r_ikLkGX8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20va0dVVGhV/dVhqLWpiSWNCSDFI/dE5tc2ZCM2ZyalFt/bEVCSDFpbmhlbkpI/RS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9iR2wyWldG/aWIzVjBMbU52L2JT/OTBhRzFpTDFkRFow/NXUvTmxwQlZITm9Z/VXhQUkdFNS9OMlZs/UmtZeGJVMTBXVDB2/L01UVXdNSGd3TDJa/cGJIUmwvY25NNmJt/OWZkWEJ6WTJGcy9a/U2dwT20xaGVGOWll/WFJsL2N5Z3hOVEF3/TURBcE9uTjAvY21s/d1gybGpZeWdwTHpF/eC9UWFZ6ZEdGdVox/ODFNRXhmL01ERmZT/Rkl0TlRoaU9HVTIv/TmpZMVpqbGlOVGho/WmpWai9PVEV6T1dN/M0xtcHdadw", // Ford Mustang
      miles: 15000,
      gearType: "Automatic",
      color: "Red",
      price: 35000,
    },
    {
      name: "Tesla Model 3",
      fuelType: "Electric",
      model: "Model 3",
      type: "Sedan",
      image: "https://imgs.search.brave.com/7biQXK8ECA0mPsvD2_PjmA-vqsPwVnXsCz38AxLLSG8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vamc4bVY0/b0hveWFHTU9neVVf/cHV5YlFwZktFZ2JN/S2dELUFLRHF4MVd6/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/WVhKMy9iM2N0ZFdz/dGQzQXRNeTVwL2JX/ZHBlQzV1WlhRdk1q/QXgvT1MxVVpYTnNZ/UzFOYjJSbC9iQzB6/TFZCbGNtWnZjbTFo/L2JtTmxMV3hsWVdR/dWNHNW4", // Tesla Model 3
      miles: 12000,
      gearType: "Automatic",
      color: "Blue",
      price: 40000,
    },
    {
      name: "BMW X5",
      fuelType: "Diesel",
      model: "X5",
      type: "SUV",
      image: "https://imgs.search.brave.com/Nh4KymnihjadMBOYYTdpddz3drF5QjOEuCeRWLScppo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vX1JqcG90/c25zQTFMMnZBZjBP/QkZGSy1RYll5OEpU/N01EUzYtVWlaZ1lB/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdsdC9aeTVqWVhK/a1pXdG9ieTVqL2Iy/MHZhVzFoWjJWekwy/TmgvY21WNGRHVnlh/Vzl5YVcxaC9aMlZ6/THprek1IZzJNakF2/L1FrMVhMMWcxTHpF/d05Ea3cvTHpFMk9E/azROVE15T1RrNC9N/alV2YzJsa1pTMTJh/V1YzL0xTaHNaV1ow/S1MwNU1DNXEvY0dj/X2FXMTNhV1IwYUQw/NC9PVEFtYVcxd2Iy/eHBZM2s5L2NtVnph/WHBs", // BMW X5
      miles: 40000,
      gearType: "Automatic",
      color: "Grey",
      price: 45000,
    },
    {
      name: "Audi Q7",
      fuelType: "Diesel",
      model: "Q7",
      type: "SUV",
      image: "https://imgs.search.brave.com/LpBLVQnmeN436scvqz2g8ZvdVd9_Zvi56vTWbkSkkxo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vRHR4akYw/SHpDOFVFYm1kMW5a/SU5zeE1YYXpkdXRU/elBmbURWenYwOHBV/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkz/ZDNjdS9kbVZzYjJO/cGRIbHFiM1Z5L2Jt/RnNMbU52YlM5cGJX/Rm4vWlhNdmMzUnJM/ekl3TWpNdi9PRGcw/TDJGa01qQXlNWEUz/L09EZzBNVEF4Tmpj/MFh6WXcvTUM1cWNH/Yw", // Audi Q7
      miles: 35000,
      gearType: "Automatic",
      color: "Silver",
      price: 48000,
    },
    {
      name: "Hyundai Elantra",
      fuelType: "Petrol",
      model: "Elantra",
      type: "Sedan",
      image: "https://imgs.search.brave.com/wfa97CRrcX6OG7oPttIgbWFTngF9zzTm-L5JWvBkBZw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vc0c3Z09w/UHhPWEVneWpVSG5V/ZmtSRW5nNjlOVDNt/c3lCRFJheVpwVE1n/Yy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlq/WkdOei9jMnd1YVdK/emNuWXVibVYwL0wy/RjFkRzlrWVhSaEwy/bHQvWVdkbGN5OF9h/VzFuUFZWVC9Remt3/U0ZsRE1ESXhRVEF4/L016QXdMbXB3Wnla/M2FXUjAvYUQwMU16/WQ", // Hyundai Elantra
      miles: 22000,
      gearType: "Manual",
      color: "White",
      price: 17000,
    },
    {
      name: "Kia Seltos",
      fuelType: "Petrol",
      model: "Seltos",
      type: "SUV",
      image: "https://imgs.search.brave.com/XVB1AdJl31A1GjPnz4r6anBjCwsNUSYKwzfAoU8DqUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vTUJkQVMw/WDVTT3hOLTdlaWZC/Zllya3NFNjh1YnZT/WXJJUUNlYm13Ukl3/ay9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTkx/Y0d4di9ZV1F1ZDJs/cmFXMWxaR2xoL0xt/OXlaeTkzYVd0cGNH/VmsvYVdFdlkyOXRi/Vzl1Y3k4MS9MelZq/TDB0cFlWOVRaV3gw/L2IzTmZVMUF5WDFC/RlgxTnUvYjNkZlYy/aHBkR1ZmVUdWaC9j/bXhmS0RZcFh5aGpj/bTl3L2NHVmtLUzVx/Y0dj", // Kia Seltos
      miles: 18000,
      gearType: "Automatic",
      color: "White",
      price: 21000,
    },
    {
      name: "Volkswagen Polo",
      fuelType: "Petrol",
      model: "Polo",
      type: "Hatchback",
      image: "https://imgs.search.brave.com/IsbWoZgZI5DVhGnwm8WYheGyRn5b7QZ3V6gAgYdP0zY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdnZBTWp2/M2NWbC1yMG1SdFly/aUxSZzFBWGhWYVF3/WVlrR0JTejd6NS1z/by9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTlo/YzNObC9kSE11ZG05/c2EzTjNZV2RsL2Jp/NWpiMjB2YVhNdmFX/MWgvWjJVdmRtOXNh/M04zWVdkbC9ibUZu/TDI1bGQxOWpZWEp6/L0xYQnZiRzh0Wlho/MFpYSnAvYjNKZlpu/SnZiblJmYzJsay9a/UzAwWHpNdE1Ua3lN/SGd4L05EUXdQMXB0/YkRCUVYwNTUvWWpO/QmMwMVRXbTFpV0ZF/NS9ZMGMxYmtwdVpI/QmFSREEwL1RVUkJi/VmxYZUhCYU1qUTUv/VFVNMGQwMURkM2RN/YWtGMy9TbTFLYlZs/Nk1YWmFiVmx0L1dY/cFNhVTFCUFQw", // Volkswagen Polo
      miles: 27000,
      gearType: "Manual",
      color: "Blue",
      price: 15000,
    },
    {
      name: "Mercedes-Benz C-Class",
      fuelType: "Petrol",
      model: "C-Class",
      type: "Sedan",
      image: "https://imgs.search.brave.com/2c5jIdl70TXXpTWpmzVos_n4dYGLY3f4PmyHG9ucppI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdnYtNVNI/Tkh6VHlmV1NwUEVH/TUJTLUR6b0ZxQXB6/cmhOdlhpSERLZEk2/Zy9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk5q/UXkvT0RNME16VXdM/M0JvYjNSdi9MMjFs/Y21ObFpHVnpMV0ps/L2Jub3RZeTFqYkdG/emN5NXEvY0djX2N6/MDJNVEo0TmpFeS9K/bmM5TUNaclBUSXdK/bU05L2IxVkpUbGht/VkZCalNqUnMvTjJs/bGExUlNNRWxtUkRs/Uy9WRVpCUjJOTE56/QkthemxVL1pFWkJS/MlowYXow", // Mercedes-Benz C-Class
      miles: 32000,
      gearType: "Automatic",
      color: "Black",
      price: 52000,
    },
  ];
}

const FakeData = {
  carList: createRandomCarList(),
}

export default FakeData;