import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import cards from "../../data/hardcoded/dashboardCardsData";
import type { DashboardCard } from "../../types/index";

function DashboardCards() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      {cards.map((card: DashboardCard, index) => (
        <Card key={card?.id} style={{ borderRadius: "12px" }}>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              "&[data-active]": {
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%", fontFamily: "Manrope, sans-serif" }}>
              <Typography
                fontSize={14}
                fontWeight={500}
                color="#697586"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                {card.title}
                <Image src={card.icon} alt="total icon" className="mb-2" />
              </Typography>
              <Typography
                color="black"
                fontWeight={700}
                fontSize={20}
                component="div"
                // marginTop={1}
                marginBottom={1}
              >
                {card.description}
              </Typography>
              <Typography
                fontSize={12}
                fontWeight={500}
                color="#16B364"
                paddingTop={1}
                sx={{ borderTop: "1px solid #f8fafc" }}
              >
                {card.marketPercent}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default DashboardCards;
