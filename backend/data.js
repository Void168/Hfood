import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
            name: 'Phu Hung',
            email: 'hungle408.k44@st.ueh.edu.com',
            password: bcrypt.hashSync('hung12345', 8),
            isAdmin: false,
        },
        {
            name: 'KennyS',
            email: 'mrhspacespeaker168@gmail.com',
            password: bcrypt.hashSync('Phuhung168', 8),
            isAdmin: false,
        },
        {
            name: 'Lê Phú Hưng',
            email: 'mrspaceboiz@icloud.com',
            password: bcrypt.hashSync('hung12345', 8),
            isAdmin: true,
        },
        {
            name: 'MrH',
            email: 'kennyschrub195@gmail.com',
            password: bcrypt.hashSync('Phuhung168', 8),
            isAdmin: true,
        }
    ],
    products: [
        {
            name: 'Bayonet Lore',
            category: 'Dao',
            image: '/images/bayonet-lore.png',
            price: 1365,
            countInStock: 5,
            brand: 'Gamma Case',
            rating: 4.5,
            numReviews: 10,
            quality: 'Dòng sản phẩm cao cấp',
            description:'Bayonet là một con dao thẩm mỹ có sẵn cho người chơi trong Counter-Strike: Global Offensive, và là một vật phẩm cực kỳ hiếm nhận được khi mở một số hộp vũ khí nhất định.'
        },
        {
            name: 'Bowie Tiger Tooth',
            category: 'Dao',
            image: '/images/bowie-tiger-tooth.png',
            price: 278.81,
            countInStock: 15,
            brand: 'Spectrum Case',
            rating: 4.3,
            numReviews: 20,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Con dao Bowie có lưỡi cưa đầy đủ tang này được thiết kế để sử dụng nhiều trong các tình huống sinh tồn tàn khốc.'
        },
        {
            name: 'Butterfly Doppler',
            category: 'Dao',
            image: '/images/butterfly-doppler.png',
            price: 1672.29,
            countInStock: 4,
            brand: 'Spectrum Case',
            rating: 4.9,
            numReviews: 12,
            quality: 'Dòng sản phẩm cao cấp',
            description:'Đây là một chiếc balisong được thiết kế riêng, thường được gọi là dao bướm. Đặc điểm nổi bật của loại vũ khí này là phần mở giống như cánh quạt của một lưỡi quay tự do, cho phép triển khai hoặc che giấu nhanh chóng. Do đó, dao bướm bị đặt ngoài vòng pháp luật ở nhiều quốc gia.'
        },
        {
            name: 'Classic Vanilla',
            category: 'Dao',
            image: '/images/classic-vanilla.png',
            price: 344.95,
            countInStock: 16,
            brand: 'CS20 Case',
            rating: 4.5,
            numReviews: 11,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Là loại dao cổ điển của dòng Counter-Strike, cạnh của con dao này được thiết kế vừa vặn với máy ép Stellite được giữ ở vị trí hoàn hảo do nó phù hợp chính xác với titan trên má và xương sống của lưỡi dao. Tay cầm là ngà voi răng mấu hóa thạch được giữ trong một túi bằng sợi carbon.'
        },
        {
            name: 'Falchion Ultra Violet',
            category: 'Dao',
            image: '/images/falchion-ultra-violet.png',
            price: 484.89,
            countInStock: 17,
            brand: 'Spectrum Case',
            rating: 4.2,
            numReviews: 6,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Một sự tôn kính hiện đại đối với một thanh kiếm falchion, lưỡi clip nhọn này có một cạnh cong.'
        },
        {
            name: 'Flip Gamma Doppler',
            category: 'Dao',
            image: '/images/flip-gamma-dopller.png',
            price: 438.01,
            countInStock: 13,
            brand: 'Gamma Case',
            rating: 4.7,
            numReviews: 15,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Dao lật có lưỡi quét ngược kiểu Ba Tư với đầu nhọn. Mặc dù bản thân nó có thể dễ vỡ, nhưng thiết kế tổng thể của thiết kế của con dao lật lại bền một cách đáng ngạc nhiên.'
        },
        {
            name: 'Gut Knife Autotronic',
            category: 'Dao',
            image: '/images/gut-autotronic.png',
            price: 287.50,
            countInStock: 20,
            brand: 'Gamma Case',
            rating: 4.3,
            numReviews: 9,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Đặc điểm đáng chú ý nhất của dao rút ruột là phần móc ruột trên xương sống của lưỡi dao. Ban đầu được phổ biến như một phương tiện hỗ trợ cho trò chơi mặc quần áo trên sân, móc ruột cũng có hiệu quả trong việc cắt các vật liệu dạng sợi như dây thừng, dây vải hoặc dây đai an toàn một cách dễ dàng.'
        },
        {
            name: 'Huntsman Damascus Steel',
            category: 'Dao',
            image: '/images/huntsman-damacus-steel.png',
            price: 169.30,
            countInStock: 25,
            brand: 'Spectrum Case',
            rating: 4.4,
            numReviews: 10,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Một con dao được thiết kế cho các mục đích chiến thuật hiện đại, lưỡi dao này rất phù hợp cho một loạt các nhu cầu chiến đấu và thực dụng. Điểm Tanto độc đáo cho phép thâm nhập tối đa qua cả những bề mặt khó khăn nhất.'
        },
        {
            name: 'Karambit Black Laminate',
            category: 'Dao',
            image: '/images/karambit-black-lamienate.png',
            price: 1150,
            countInStock: 7,
            brand: 'Gamma 2 Case',
            rating: 4.4,
            numReviews: 8,
            quality: 'Dòng sản phẩm cận cao cấp',
            description:'Với lưỡi cong mô phỏng móng vuốt của một con hổ, karambit được phát triển như một phần của môn võ silat ở Đông Nam Á. Dao thường được sử dụng với chuôi ngược, với ngón đeo nhẫn trên ngón trỏ.'
        },
        {
            name: 'M9 Bayonet FreeHand',
            category: 'Dao',
            image: '/images/m9-bayonet-free-hand.png',
            price: 407.81,
            countInStock: 12,
            brand: 'Gamma 2 Case',
            rating: 4.2,
            numReviews: 8,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Đây là lưỡi lê M-9. Ban đầu được thiết kế để gắn trên một khẩu súng trường, nó cũng rất thích hợp để chiến đấu tầm gần.'
        },
        {
            name: 'Navaja Blue Steel',
            category: 'Dao',
            image: '/images/navaja-bluesteel.png',
            price: 117.36,
            countInStock: 35,
            brand: 'Horizon Case',
            rating: 4.5,
            numReviews: 10,
            quality: 'Dòng sản phẩm cao cấp',
            description:'Con dao lật được tráng men bằng đá cẩm thạch này che giấu một lưỡi dao thon nhỏ nhưng hung ác.'
        },
        {
            name: 'Paracord Case Hardened',
            category: 'Dao',
            image: '/images/paracord-caseharden.png',
            price: 749.00,
            countInStock: 13,
            brand: 'Gamma Case',
            rating: 4.4,
            numReviews: 14,
            quality: 'Dòng sản phẩm cận cấp',
            description:'Loại dao sinh tồn có lưỡi cố định này được thiết kế để chống lại việc được sử dụng như một vũ khí và một công cụ, chẳng hạn như để đặt bẫy, săn bắt động vật hoặc cắt tán lá. Tay cầm được quấn theo chiều dài của paracord đa năng.'
        },
        {
            name: 'Nomad Fade',
            category: 'Dao',
            image: '/images/nomad-fade.png',
            price: 532.99,
            countInStock: 15,
            brand: 'Fracture Case',
            rating: 4.6,
            numReviews: 11,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Con dao có lưỡi khóa săn bắn chiến thuật tiện dụng này có phần chèn tay cầm bằng composite và một lưỡi dao rộng, chắc chắn, hữu ích để cắt và cạy các vật liệu khác nhau.'
        },
        {
            name: 'Shadow Dagger Forest DDPAT',
            category: 'Dao',
            image: '/images/shadow-dagger-forest-ddpat.png',
            price: 133.44,
            countInStock: 24,
            brand: 'Shadow Case',
            rating: 4.3,
            numReviews: 12,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Được thiết kế cho sự tàn bạo hiệu quả, sử dụng dao găm đẩy đơn giản như ném một hoặc hai cú đấm.'
        },
        {
            name: 'Stiletto Scorched',
            category: 'Dao',
            image: '/images/stiletto-Scorched.png',
            price: 108.29,
            countInStock: 40,
            brand: 'Horizon Case',
            rating: 4.0,
            numReviews: 19,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Trong lịch sử, một tiêu điểm của sự tranh cãi và thậm chí là quy định, con dao mũi nhọn kiểu Ý này có một lưỡi được nạp vào lò xo có thể được triển khai gần như ngay lập tức chỉ với một cú nhấn nhả.'
        },
        {
            name: 'Skeleton CrimsonWeb',
            category: 'Dao',
            image: '/images/skeleton-crimsonweb.png',
            price: 2100,
            countInStock: 3,
            brand: 'Fracture Case',
            rating: 4.8,
            numReviews: 5,
            quality: 'Dòng sản phẩm cao cấp',
            description:'Con dao tang có xương này đã được dán ở tay cầm để cải thiện độ bám. Lỗ cho phép luồn ngón tay qua để đảm bảo độ ổn định và an toàn.'
        },
        {
            name: 'Survival Knife Slaughter',
            category: 'Dao',
            image: '/images/survival-slaughter.png',
            price: 411.67,
            countInStock: 17,
            brand: 'Fracture Case',
            rating: 4.6,
            numReviews: 13,
            quality: 'Dòng sản phẩm trung cấp',
            description:'Con dao tuyệt vời để sinh tồn trong chiến đấu.'
        },
        {
            name: 'Talon Marble Fade',
            category: 'Dao',
            image: '/images/talon-marblefade.png',
            price: 903.37,
            countInStock: 6,
            brand: 'Prisma Case',
            rating: 5,
            numReviews: 15,
            quality: 'Dòng sản phẩm cận cao cấp',
            description:'Chiếc karambit được xử lý bằng ngà voi này có đinh tán bằng đồng và đường gờ răng cưa, vì vậy nó cắt trên đường vào và rách trên đường ra.'
        },
        {
            name: 'Ursus Rust Coat',
            category: 'Dao',
            image: '/images/ursus-rustcoat.png',
            price: 149.58,
            countInStock: 36,
            brand: 'Prisma Case',
            rating: 4.1,
            numReviews: 15,
            quality: 'Dòng sản phẩm phổ biến',
            description:'Con dao sinh tồn kiểu tanto này có một lưỡi cắt nhiều khía và toàn bộ phần tang, hoàn chỉnh với quả bom va đập. Không ồn ào, không có bộ phận chuyển động - chỉ cần một lưỡi dao đáng tin cậy đã sẵn sàng hoạt động.'
        },
    ]
}

export default data