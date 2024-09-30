## Mô tả : Xây dựng 1 trang web hỗ trợ đầu tư chứng khoán bằng cách dự đoán xu hướng thong qua Machine Learning và các chức năng hỗ trợ người dùng khác.

## Các chức năng:
* Thông báo (<strong>Nofitication</strong>) : Cập nhật tin tức từ các trang báo thông tin về xu hướng chứng khoán và các tin tức chung.
* Phần hỗ trợ người dùng (<strong>Support and information</strong>) : cung cấp các hướng dẫn sử dụng website và các thông tin kiến thức giúp người mới bắt đầu.
* Thông tin cổ phiếu (<strong>Stock infomation</strong>) : Xem thông tin và lịch sử tăng giảm của từng mã cổ phiếu
* Dự đoán xu thế cổ phiếu (<strong>Predict stock trends</strong>) : Xem các xu thế của từng mã cổ phiếu trong tương lai.
* Tạo bài viết bàn luận (<strong>Community</strong>)


## Công nghệ :  
  * <strong>Front-End:</strong> HTML & CSS, JS, ReactJS
  * <strong>Back-End:</strong> Python-Flask or Django / Java-Springboot
  * <strong>Database:</strong> MySQL or PostgreSQL
  * <strong>Training model Machine Learning:</strong> Python-Pytorch, Numpy, TensorFlow, Pandas, Matplotlib
  * <strong>Stock API</strong>: https://github.com/thinh-vu/vnstock & https://github.com/phamdinhkhanh/vnquant
  
## graph LR
    A[support-stock-investment-using-ai-and-fundamental-analysis] --> B[client]
    B --> C[public]
    C --> D[index.html]
    C --> E[favicon.ico]
    B --> F[src]
    F --> G[components]
    G --> H[App.js]
    G --> I[Header.js]
    G --> J[Footer.js]
    F --> K[utils]
    K --> L[api.js]
    K --> M[constants.js]
    F --> N[images]
    F --> O[styles]
    O --> P[global.css]
    F --> Q[index.js]
    B --> R[package.json]
    A --> S[server]
    S --> T[app]
    T --> U[__init__.py]
    T --> V[config.py]
    T --> W[utils]
    W --> X[__init__.py]
    T --> Y[app.py]
    S --> Z[requirements.txt]
    A --> AA[ml]
    AA --> BB[data]
    BB --> CC[raw]
    BB --> DD[processed]
    AA --> EE[models]
    AA --> FF[notebooks]
    AA --> GG[scripts]
    AA --> HH[utils]
    HH --> II[__init__.py]
    AA --> JJ[requirements.txt]
    A --> KK[README.md]
    A --> LL[.gitignore]

SUPPORT-STOCK-INVESTMENT-USING-AI-AND-FUNDAMENTAL-ANALYSIS
├── client
│   ├── node_modules
│   └── public
│       ├── athStock-favicon.ico
│       └── index.html
└── src
    └── components
        ├── App.js
        ├── Footer.js
        └── Header.js
    ├── images
    ├── styles
    ├── utils
    │   └── index.js
    ├── package-lock.json
    ├── package.json
    ├── README_REACT.md
    └── README.md
├── ml
└── server
    └── README.md
        └── run.py
