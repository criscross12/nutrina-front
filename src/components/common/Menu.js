import { MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { tokens } from "../../theme";
import { useTheme, Typography } from "@mui/material";
import { Auth } from 'aws-amplify';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Cookies from 'js-cookie';

export const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography align="left" noWrap>{title}</Typography>
    </MenuItem>
  );
};

export const Salir = ({ selected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  return (
    <MenuItem
      active={selected === 'Salir'}
      style={{ color: colors.grey[100] }}
      onClick={async () => {
        try {
          await Auth.signOut().catch(() => { throw new Error("Error en cerrar sesión") })
          Cookies.remove('tipo');
          navigate('/login')
        } catch (err) {
          console.log(err)
          this.props.snack_bar(true, err.message || "Hubo un error con cognito", "error")
        }
      }}
      icon=<LogoutOutlinedIcon />
    >
      <Typography align="left">Salir</Typography>
    </MenuItem>
  )

}