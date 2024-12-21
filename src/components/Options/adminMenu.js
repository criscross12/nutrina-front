import { useState } from "react";
import { Item, Salir } from "../../common/Menu";
import { Storage, Settings, DisplaySettings } from '@mui/icons-material';

const AdminMenu = () => {
  const [selected, setSelected] = useState("Bases LSP");
  const items = [
    {
      titulo: "Logs Interfaces",
      valor: "/facturas",
      icono: Storage,
    },
    {
      titulo: "Activadores",
      valor: "/activadores",
      icono: Settings,
    },
    {
      titulo: "Configuraciones",
      valor: "/configuraciones",
      icono: DisplaySettings,
    }
  ]
  return (
    <>
      <div>
        {items.map(item => (
          <Item key={item.titulo}
            title={item.titulo}
            to={item.valor}
            icon={<item.icono />}
            selected={selected}
            setSelected={setSelected}
          />
        ))

        }
      </div>

      <Salir
        selected={selected}
      />
    </>
  )
}

export default AdminMenu;