export const initialProjectState = [
    {
      id: "xSzcQMyjC7NjYyJafRVAT",
      name: "Webshop",
      description: "Webshop schema",
      schemas: [
        {
          id: "T-QfQfocka7w2moY0C1qO",
          position: {
            x: 44,
            y: 79
          },
          data: {
            columns: [
              {
                id: "uqN1-JE6csGOHZKZuidZz",
                name: "id",
                value: "int"
              },
              {
                id: "aBOyyH7VBlyIOjS3lbqnD",
                name: "firstName",
                value: "varchar"
              },
              {
                id: "uS4Be_4sE2EwM5vficvBn",
                name: "lastName",
                value: "varchar"
              },
              {
                id: "C-Ld5YTu62ML5iZzKawWG",
                name: "email",
                value: "varchar"
              },
              {
                id: "ehZXPOtGbBzTDzA0b4z78",
                name: "password",
                value: "varchar"
              },
              {
                id: "zyz9HVjVfmml79Cxt3GCz",
                name: "phoneNumber",
                value: "int"
              }
            ],
            id: "T-QfQfocka7w2moY0C1qO",
            name: "user"
          }
        },
        {
          id: "v2kzW8xk9JuCMicOjuq-y",
          position: {
            x: 398.2525060451554,
            y: 181.81116221636907
          },
          data: {
            columns: [
              {
                id: "bKIWoMGw6gnyOv2uo9WUd",
                name: "id",
                value: "int"
              },
              {
                id: "yqnSidpG7jzjp3N9lWEmB",
                name: "userId",
                value: "int"
              }
            ],
            id: "v2kzW8xk9JuCMicOjuq-y",
            name: "cart"
          }
        },
        {
          id: "9E1j6UOKKPm2dHo2GPtUD",
          position: {
            x: 1052.3131961618215,
            y: 363.6651078532083
          },
          data: {
            columns: [
              {
                id: "tKs36YGY0vB_85UTI_IJB",
                name: "id",
                value: "int"
              },
              {
                id: "0AeNgFhdSOOnP1A_9uUFR",
                name: "name",
                value: "varchar"
              },
              {
                id: "VRRo1qPTijLQxTV7_jZ47",
                name: "description",
                value: "varchar"
              },
              {
                id: "PmejlkgiywiL0bYAamtRv",
                name: "price",
                value: "int"
              }
            ],
            id: "9E1j6UOKKPm2dHo2GPtUD",
            name: "product"
          }
        },
        {
          id: "gx9pyl4CMY-07FhWX6sza",
          position: {
            x: 728.3297906601047,
            y: 203.02620958537398
          },
          data: {
            columns: [
              {
                id: "OPJMs83DZE6cAVTcMQaoh",
                name: "id",
                value: "int"
              },
              {
                id: "4yzqRxCiYZsc-yjAKSPV-",
                name: "productId",
                value: "int"
              },
              {
                id: "WzljjmLEpwlOWJXuZPmF9",
                name: "cartId",
                value: "int"
              },
              {
                id: "r6q8rnz1VLtKRFyWcejGD",
                name: "quantity",
                value: "int"
              }
            ],
            id: "gx9pyl4CMY-07FhWX6sza",
            name: "cardItem"
          }
        }
      ],
      edges: [
        {
          source: "T-QfQfocka7w2moY0C1qO",
          sourceHandle: "uqN1-JE6csGOHZKZuidZz-right",
          target: "v2kzW8xk9JuCMicOjuq-y",
          targetHandle: "yqnSidpG7jzjp3N9lWEmB-left",
          type: "customEdge",
          id: "reactflow__edge-T-QfQfocka7w2moY0C1qOuqN1-JE6csGOHZKZuidZz-right-v2kzW8xk9JuCMicOjuq-yyqnSidpG7jzjp3N9lWEmB-left"
        },
        {
          source: "gx9pyl4CMY-07FhWX6sza",
          sourceHandle: "WzljjmLEpwlOWJXuZPmF9-right",
          target: "9E1j6UOKKPm2dHo2GPtUD",
          targetHandle: "tKs36YGY0vB_85UTI_IJB-left",
          type: "customEdge",
          id: "reactflow__edge-gx9pyl4CMY-07FhWX6szaWzljjmLEpwlOWJXuZPmF9-right-9E1j6UOKKPm2dHo2GPtUDtKs36YGY0vB_85UTI_IJB-left"
        },
        {
          source: "v2kzW8xk9JuCMicOjuq-y",
          sourceHandle: "bKIWoMGw6gnyOv2uo9WUd-right",
          target: "gx9pyl4CMY-07FhWX6sza",
          targetHandle: "OPJMs83DZE6cAVTcMQaoh-left",
          type: "customEdge",
          id: "reactflow__edge-v2kzW8xk9JuCMicOjuq-ybKIWoMGw6gnyOv2uo9WUd-right-gx9pyl4CMY-07FhWX6szaOPJMs83DZE6cAVTcMQaoh-left"
        }
      ]
    }
  ]