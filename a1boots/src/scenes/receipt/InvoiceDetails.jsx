import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Order from "../../components/Order";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import Select from 'react-select';

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [order, setOrder] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getOrder() {
    const order = await fetch(
      `http://localhost:1337/api/orders/${orderId}`,
      {
        method: "GET",
      }
    );
    const orderJson = await order.json();
    setOrder(orderJson.data);
  }

  async function getOrders() {
    const orders = await fetch(
      `http://localhost:1337/api/orders`,
      {
        method: "GET",
      }
    );
    const ordersJson = await orders.json();
    setOrders(ordersJson.data);
  }

  useEffect(() => {
    getOrder();
    getOrders();
  }, [orderId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box width="80%" m="80px auto">

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
 
          <Box m="65px 0 25px 0">
            <Typography variant="h3">{order?.attributes?.stripeSessionId}</Typography>
            <Typography>${order?.attributes?.products?.[0]?.id}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {order?.attributes?.longDescription}
            </Typography>
          </Box>

      </Box>

    </Box>
  );
};

export default InvoiceDetails;
