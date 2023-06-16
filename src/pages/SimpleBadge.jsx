import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge() {
  const [count,setCount] = useState('0') // bu 0-ri number kimi goturmurdu.Mende string olaraq verdim
  return (
    <Badge badgeContent={count} color="primary">
      <MailIcon color="action" />
    </Badge>
  )
}
