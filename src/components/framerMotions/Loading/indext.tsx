import { motion } from "framer-motion";
import { StyledContanerLogin, StyledLoading } from "./styles";

export const Loading = () => {
  return (
    <StyledContanerLogin>
      <h1>Processando</h1>
      <StyledLoading>
        <motion.div
          className="loading-bar"
          animate={{ width: "100%" }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </StyledLoading>
    </StyledContanerLogin>
  );
};
