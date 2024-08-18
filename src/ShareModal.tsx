import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  shareUrl: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  open,
  onClose,
  shareUrl,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied" message after 2 seconds
    });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          fontFamily: "Raleway",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Share with friends ❤️
        </Typography>
        <TextField
          fullWidth
          value={shareUrl}
          InputProps={{
            sx: { fontFamily: "Arial" },
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
        />
        <Button
          onClick={handleCopy}
          variant="contained"
          fullWidth
          sx={{ mt: 2, fontFamily: "Arial" }}
        >
          {copied ? "Copied!" : "Copy Link"}
        </Button>
      </Box>
    </Modal>
  );
};
