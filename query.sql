create table phoneshop (
    phone_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(20),
    availability char,
    price decimal(6,2),
    in_stock INT,
    rating decimal(2,1)
)

insert into phoneshop (name, description, availability, price, in_stock, rating) VALUES
('Samsung', 'phone with 8mp camera & voice recording', 'y', 399, 3, 4.5);
('sony 98x', 'phone with 32GB memory & Bluetooth', 'y', 6999.0, 5, 4),
('realme 3', 'phone with 8mp camera & wifi calling', 'y', 4999.0, 10, 3.5),
('one plus 4', 'phone with 64GB memory, wifi, Bluetooth, 16mp camera', 'y', 9999.0, 7, 4.5);
