export const initialProjectState = [
  {
    name: "Webshop",
    description: "Simple webshop database design",
    schemas: [
      {
        id: "3F1aIYS2m8KCD-kscnXGh",
        position: {
          x: -61.037077676265085,
          y: -340.740396729832
        },
        data: {
          columns: [
            {
              id: "bH0gyeifg0XECO2J76tEb",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "bH0gyeifg0XECO2J76tEb",
                  columnTwo: "_DNB57MGZ5h-0TreuiVh5",
                  connectionType: "one-to-one",
                  tableOne: "3F1aIYS2m8KCD-kscnXGh",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "Bdp4MZEVywhe10yWL6r16",
              name: "name",
              value: "varchar",
              nullable: false
            },
            {
              id: "fe8CWGs9eiPRMlsJ6pzR1",
              name: "description",
              value: "text",
              nullable: false
            },
            {
              id: "9RRW4LbYek5oT84GiVP1K",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "zDXCLioGA3OmuXZn_WsVT",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "WslraVsKB7yF80sC1l7tb",
              name: "deleted_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "3F1aIYS2m8KCD-kscnXGh",
          name: "product_category"
        }
      },
      {
        id: "cQjGdDC7ymaT3LmZJ2fzS",
        position: {
          x: 421.88264167808677,
          y: 164.85102016147565
        },
        data: {
          columns: [
            {
              id: "MQR2_n8y2DaaBVLCiUWy3",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "NgP2g79DZIi1d08ayTgVO",
                  columnTwo: "MQR2_n8y2DaaBVLCiUWy3",
                  connectionType: "one-to-one",
                  tableOne: "GMlxxGNJuw8RaYvA7x97o",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                },
                {
                  columnOne: "9dgtmbPTIIS1vGzPQXTwC",
                  columnTwo: "MQR2_n8y2DaaBVLCiUWy3",
                  connectionType: "one-to-one",
                  tableOne: "xIWsQ1L1bLv1MQsRaZDzl",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "MUdbnmunMGTGrrASPobI3",
              name: "name",
              value: "varchar",
              nullable: false
            },
            {
              id: "sgKEBRI-ddoftBbp-I7HD",
              name: "description",
              value: "text",
              nullable: false
            },
            {
              id: "yNQq9qCFftxzYEISIYRCg",
              name: "sku",
              value: "varchar",
              nullable: false
            },
            {
              id: "_DNB57MGZ5h-0TreuiVh5",
              name: "category_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "bH0gyeifg0XECO2J76tEb",
                  columnTwo: "_DNB57MGZ5h-0TreuiVh5",
                  connectionType: "one-to-one",
                  tableOne: "3F1aIYS2m8KCD-kscnXGh",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "ikmuT7dpv6Ip97NmsOVRH",
              name: "inventory_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "cTmDlpL63yMEs-q61UySG",
                  columnTwo: "ikmuT7dpv6Ip97NmsOVRH",
                  connectionType: "one-to-one",
                  tableOne: "vuFkxivLetAcwF0RpYNAt",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "PNhKCDppcKYx3gmztUxpz",
              name: "price",
              value: "decimal",
              nullable: false
            },
            {
              id: "4rMVj7iGIAq4ui-t0gNtu",
              name: "discount_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "5PG4HxQ6n857m4KsDbrBl",
                  columnTwo: "4rMVj7iGIAq4ui-t0gNtu",
                  connectionType: "one-to-one",
                  tableOne: "xpqnTxp20-ll_aup-ssRH",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "7ZVGlnCAT8tjDhYw6i3SM",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "dfw6lomVbbgZ7-Qh0vfem",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "F393geWHht9Lnv0uu7nhT",
              name: "deleted_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "cQjGdDC7ymaT3LmZJ2fzS",
          name: "product"
        }
      },
      {
        id: "vuFkxivLetAcwF0RpYNAt",
        position: {
          x: -418.04560041505573,
          y: -186.13730694577117
        },
        data: {
          columns: [
            {
              id: "cTmDlpL63yMEs-q61UySG",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "cTmDlpL63yMEs-q61UySG",
                  columnTwo: "ikmuT7dpv6Ip97NmsOVRH",
                  connectionType: "one-to-one",
                  tableOne: "vuFkxivLetAcwF0RpYNAt",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "cipjGVDUqG8iBc26-GIiQ",
              name: "quantity",
              value: "int",
              nullable: false
            },
            {
              id: "85SK79IyIugOdXO-hQ28l",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "7VTbrn8xI3GJ3X1N3Rlhq",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "HTUXK1yNS5JpUEw4CeBff",
              name: "deleted_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "vuFkxivLetAcwF0RpYNAt",
          name: "product_inventory"
        }
      },
      {
        id: "xpqnTxp20-ll_aup-ssRH",
        position: {
          x: -454.81384797057933,
          y: 218.20046541109872
        },
        data: {
          columns: [
            {
              id: "5PG4HxQ6n857m4KsDbrBl",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "5PG4HxQ6n857m4KsDbrBl",
                  columnTwo: "4rMVj7iGIAq4ui-t0gNtu",
                  connectionType: "one-to-one",
                  tableOne: "xpqnTxp20-ll_aup-ssRH",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "Yo39ugaBWQjf0PbhZUEfU",
              name: "name",
              value: "varchar",
              nullable: false
            },
            {
              id: "ZukOWYor-Of58Sl43qwA1",
              name: "description",
              value: "text",
              nullable: false
            },
            {
              id: "c_CFCjkzNnywwU5norEr6",
              name: "discount_percent",
              value: "decimal",
              nullable: false
            },
            {
              id: "8z3YiHUR9vT0HwGwPI6Yl",
              name: "active",
              value: "boolean",
              nullable: false
            },
            {
              id: "XC5uVjSAzGhYsRO_W5GVq",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "QatW-ruNcnUUUCBBrL-rp",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "3wMV7079TrfTuJQazjFuI",
              name: "deleted_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "xpqnTxp20-ll_aup-ssRH",
          name: "discount"
        }
      },
      {
        id: "v7EiTUNzAEOxwLqJuieAA",
        position: {
          x: -361.7872091693771,
          y: 741.4252916740626
        },
        data: {
          columns: [
            {
              id: "lKvC71d8ysfrTE8LZrlJp",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "lKvC71d8ysfrTE8LZrlJp",
                  columnTwo: "eTDBUOZ2V8urXR0OZh3VW",
                  connectionType: "one-to-one",
                  tableOne: "v7EiTUNzAEOxwLqJuieAA",
                  tableTwo: "xIWsQ1L1bLv1MQsRaZDzl"
                },
                {
                  columnOne: "He9Hmtf6SywPvanFUuIOh",
                  columnTwo: "lKvC71d8ysfrTE8LZrlJp",
                  connectionType: "one-to-one",
                  tableOne: "R2gVsmHvvb8Sz7F4NLlFi",
                  tableTwo: "v7EiTUNzAEOxwLqJuieAA"
                }
              ]
            },
            {
              id: "2kB3jp8qAeupR7F-Mc1Ky",
              name: "user_id",
              value: "varchar",
              nullable: false,
              relations: [
                {
                  columnOne: "2kB3jp8qAeupR7F-Mc1Ky",
                  columnTwo: "HZfGOc14Ygt7WHGZt2kez",
                  connectionType: "one-to-one",
                  tableOne: "v7EiTUNzAEOxwLqJuieAA",
                  tableTwo: "4n77W1iVtft-lM_Fm7sy9"
                }
              ]
            },
            {
              id: "ZuOjgDsSyHfRlq58z--Jb",
              name: "total",
              value: "decimal",
              nullable: false
            },
            {
              id: "OUmHr-J-bizP-nun2-GmK",
              name: "payment_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "lqATyMvzNHWpAafM4xRGS",
                  columnTwo: "OUmHr-J-bizP-nun2-GmK",
                  connectionType: "one-to-one",
                  tableOne: "R2gVsmHvvb8Sz7F4NLlFi",
                  tableTwo: "v7EiTUNzAEOxwLqJuieAA"
                }
              ]
            },
            {
              id: "GYYnpjWEZBeDWFnkqTqIm",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "TNXzXAWgJXtTBE9l6qvQn",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "v7EiTUNzAEOxwLqJuieAA",
          name: "order_details"
        }
      },
      {
        id: "xIWsQ1L1bLv1MQsRaZDzl",
        position: {
          x: 100.62248748473928,
          y: 1368.9878902938967
        },
        data: {
          columns: [
            {
              id: "vVZJv1IVyMKNRhFa6K192",
              name: "id",
              value: "int",
              nullable: false,
              relations: []
            },
            {
              id: "eTDBUOZ2V8urXR0OZh3VW",
              name: "order_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "lKvC71d8ysfrTE8LZrlJp",
                  columnTwo: "eTDBUOZ2V8urXR0OZh3VW",
                  connectionType: "one-to-one",
                  tableOne: "v7EiTUNzAEOxwLqJuieAA",
                  tableTwo: "xIWsQ1L1bLv1MQsRaZDzl"
                }
              ]
            },
            {
              id: "9dgtmbPTIIS1vGzPQXTwC",
              name: "product_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "9dgtmbPTIIS1vGzPQXTwC",
                  columnTwo: "MQR2_n8y2DaaBVLCiUWy3",
                  connectionType: "one-to-one",
                  tableOne: "xIWsQ1L1bLv1MQsRaZDzl",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "Ab6dL0wAQd_oKfhmDJgJ3",
              name: "quantity",
              value: "int",
              nullable: false
            },
            {
              id: "BYt5DqYhrwL7GGb9omLQe",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "_gA_EhS7WE8eYQOIieOjY",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "xIWsQ1L1bLv1MQsRaZDzl",
          name: "order_items"
        }
      },
      {
        id: "R2gVsmHvvb8Sz7F4NLlFi",
        position: {
          x: -727.7342843779417,
          y: 1247.6079110585376
        },
        data: {
          columns: [
            {
              id: "lqATyMvzNHWpAafM4xRGS",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "lqATyMvzNHWpAafM4xRGS",
                  columnTwo: "OUmHr-J-bizP-nun2-GmK",
                  connectionType: "one-to-one",
                  tableOne: "R2gVsmHvvb8Sz7F4NLlFi",
                  tableTwo: "v7EiTUNzAEOxwLqJuieAA"
                }
              ]
            },
            {
              id: "He9Hmtf6SywPvanFUuIOh",
              name: "order_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "He9Hmtf6SywPvanFUuIOh",
                  columnTwo: "lKvC71d8ysfrTE8LZrlJp",
                  connectionType: "one-to-one",
                  tableOne: "R2gVsmHvvb8Sz7F4NLlFi",
                  tableTwo: "v7EiTUNzAEOxwLqJuieAA"
                }
              ]
            },
            {
              id: "vN6977IJFw0eUnY5tWnFn",
              name: "amount",
              value: "int",
              nullable: false
            },
            {
              id: "sbOGh7jvAs79tzoN7Kj-J",
              name: "provider",
              value: "varchar",
              nullable: false
            },
            {
              id: "Q-r3y68IdKj4PTkCinU06",
              name: "status",
              value: "varchar",
              nullable: false
            },
            {
              id: "athOMeoKI8KcYdLE6MrWA",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "4yjP0EIjqrqK1lw5w06CH",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "R2gVsmHvvb8Sz7F4NLlFi",
          name: "payment_details"
        }
      },
      {
        id: "4n77W1iVtft-lM_Fm7sy9",
        position: {
          x: 706.751644166081,
          y: 22.827745323194165
        },
        data: {
          columns: [
            {
              id: "HZfGOc14Ygt7WHGZt2kez",
              name: "id",
              value: "varchar",
              nullable: false,
              relations: [
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "QggGdIF8003cFulqPHjgW",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "UheB1QzN68NuW-Yv50sII"
                },
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "UDUYegxBfRf3dkm4FI7W_",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "KEQut2ksBXdOO-q3KeKI6"
                },
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "JcB3ixQ5JvvEcLcqo0ilO",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "k8s9HxVaKZwBZsxMM7uyw"
                },
                {
                  columnOne: "2kB3jp8qAeupR7F-Mc1Ky",
                  columnTwo: "HZfGOc14Ygt7WHGZt2kez",
                  connectionType: "one-to-one",
                  tableOne: "v7EiTUNzAEOxwLqJuieAA",
                  tableTwo: "4n77W1iVtft-lM_Fm7sy9"
                }
              ]
            },
            {
              id: "Vd4mTO7gasxgYhks-dEIU",
              name: "username",
              value: "varchar",
              nullable: false
            },
            {
              id: "45hJX5tJxugH0thBn20w1",
              name: "password",
              value: "text",
              nullable: false
            },
            {
              id: "2yoeftmgyhfv9MckQd_Vi",
              name: "first_name",
              value: "varchar",
              nullable: false
            },
            {
              id: "hBuxc1foQx-XgC7BMvnaf",
              name: "last_name",
              value: "varchar",
              nullable: false
            },
            {
              id: "31_dSZh9fsUYr4X_f5_65",
              name: "telephone",
              value: "int",
              nullable: false
            },
            {
              id: "ggGWxURSy4qrxIu-v8V0l",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "DplX4Fr_xUUjpwVx0KCw_",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "4n77W1iVtft-lM_Fm7sy9",
          name: "user"
        }
      },
      {
        id: "UheB1QzN68NuW-Yv50sII",
        position: {
          x: 1124.156850746093,
          y: 22.221774588066637
        },
        data: {
          columns: [
            {
              id: "7RhhBgDj4ZwyKyg7HtI6d",
              name: "id",
              value: "int",
              nullable: false
            },
            {
              id: "QggGdIF8003cFulqPHjgW",
              name: "user_id",
              value: "varchar",
              nullable: false,
              relations: [
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "QggGdIF8003cFulqPHjgW",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "UheB1QzN68NuW-Yv50sII"
                }
              ]
            },
            {
              id: "IvWRnOzpE3kW5iRoL4WB4",
              name: "address_line1",
              value: "varchar",
              nullable: false
            },
            {
              id: "Uo84MxFsz-cI7GP9eeOfH",
              name: "address_line2",
              value: "varchar",
              nullable: false
            },
            {
              id: "bx4tFwrd9og3ubim9nsFe",
              name: "city",
              value: "varchar",
              nullable: false
            },
            {
              id: "hoQ16jgGiEYc0STBt4gSM",
              name: "postal_code",
              value: "varchar",
              nullable: false
            },
            {
              id: "a7U_FoJtgDXG39OL5LkzU",
              name: "country",
              value: "varchar",
              nullable: false
            },
            {
              id: "5Owbx-t8uZCKcJQHuZJ6A",
              name: "telephone",
              value: "varchar",
              nullable: false
            },
            {
              id: "dktKSGbs9rcnyEroF2CZG",
              name: "mobile",
              value: "varchar",
              nullable: false
            }
          ],
          id: "UheB1QzN68NuW-Yv50sII",
          name: "user_address"
        }
      },
      {
        id: "KEQut2ksBXdOO-q3KeKI6",
        position: {
          x: 1124.156850746093,
          y: 594.2217745880666
        },
        data: {
          columns: [
            {
              id: "BxxjbmPnU8JVEICNj421X",
              name: "id",
              value: "int",
              nullable: false
            },
            {
              id: "UDUYegxBfRf3dkm4FI7W_",
              name: "user_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "UDUYegxBfRf3dkm4FI7W_",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "KEQut2ksBXdOO-q3KeKI6"
                }
              ]
            },
            {
              id: "NuDU_z3TCKzQ915_4iZ33",
              name: "payment_type",
              value: "varchar",
              nullable: false
            },
            {
              id: "1dTsR3SLKKeEllc0-EKs9",
              name: "provider",
              value: "varchar",
              nullable: false
            },
            {
              id: "aMtfQO9spiqh-D7756NmD",
              name: "account_no",
              value: "int",
              nullable: false
            },
            {
              id: "451BaZe5eJHKl0jYEBnni",
              name: "expiry",
              value: "date",
              nullable: false
            }
          ],
          id: "KEQut2ksBXdOO-q3KeKI6",
          name: "user_payment"
        }
      },
      {
        id: "k8s9HxVaKZwBZsxMM7uyw",
        position: {
          x: 722.9371671770089,
          y: 773.4674691147736
        },
        data: {
          columns: [
            {
              id: "5n0D3MVwww6xp87TgjGuZ",
              name: "id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "T-WEDTeir8rVwstb5yDNB",
                  columnTwo: "5n0D3MVwww6xp87TgjGuZ",
                  connectionType: "one-to-one",
                  tableOne: "GMlxxGNJuw8RaYvA7x97o",
                  tableTwo: "k8s9HxVaKZwBZsxMM7uyw"
                }
              ]
            },
            {
              id: "JcB3ixQ5JvvEcLcqo0ilO",
              name: "user_id",
              value: "varchar",
              nullable: false,
              relations: [
                {
                  columnOne: "HZfGOc14Ygt7WHGZt2kez",
                  columnTwo: "JcB3ixQ5JvvEcLcqo0ilO",
                  connectionType: "one-to-one",
                  tableOne: "4n77W1iVtft-lM_Fm7sy9",
                  tableTwo: "k8s9HxVaKZwBZsxMM7uyw"
                }
              ]
            },
            {
              id: "CHyO0-FgZi4Ll8xIRTq19",
              name: "total",
              value: "decimal",
              nullable: false
            },
            {
              id: "fOeIlNcDH-6BAUXW6PjRa",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "MqS0c6flOKBI-x2fjiX-8",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "k8s9HxVaKZwBZsxMM7uyw",
          name: "shopping_session"
        }
      },
      {
        id: "GMlxxGNJuw8RaYvA7x97o",
        position: {
          x: 91.89792886798273,
          y: 943.8477719703677
        },
        data: {
          columns: [
            {
              id: "O818SaBczSMxoAr1e2FE7",
              name: "id",
              value: "int",
              nullable: false
            },
            {
              id: "T-WEDTeir8rVwstb5yDNB",
              name: "session_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "T-WEDTeir8rVwstb5yDNB",
                  columnTwo: "5n0D3MVwww6xp87TgjGuZ",
                  connectionType: "one-to-one",
                  tableOne: "GMlxxGNJuw8RaYvA7x97o",
                  tableTwo: "k8s9HxVaKZwBZsxMM7uyw"
                }
              ]
            },
            {
              id: "NgP2g79DZIi1d08ayTgVO",
              name: "product_id",
              value: "int",
              nullable: false,
              relations: [
                {
                  columnOne: "NgP2g79DZIi1d08ayTgVO",
                  columnTwo: "MQR2_n8y2DaaBVLCiUWy3",
                  connectionType: "one-to-one",
                  tableOne: "GMlxxGNJuw8RaYvA7x97o",
                  tableTwo: "cQjGdDC7ymaT3LmZJ2fzS"
                }
              ]
            },
            {
              id: "wHcOD7Uwaut03ubOgxBH2",
              name: "quantity",
              value: "int",
              nullable: false
            },
            {
              id: "710bPqo3T-6l3EvltTDm-",
              name: "created_at",
              value: "timestamp",
              nullable: false
            },
            {
              id: "6Ebp73KbA2KRs2tKBlVq3",
              name: "modified_at",
              value: "timestamp",
              nullable: false
            }
          ],
          id: "GMlxxGNJuw8RaYvA7x97o",
          name: "cart_item"
        }
      }
    ],
    edges: [
      {
        source: "4n77W1iVtft-lM_Fm7sy9",
        sourceHandle: "HZfGOc14Ygt7WHGZt2kez-right",
        target: "UheB1QzN68NuW-Yv50sII",
        targetHandle: "QggGdIF8003cFulqPHjgW-left",
        type: "customEdge",
        id: "reactflow__edge-4n77W1iVtft-lM_Fm7sy9HZfGOc14Ygt7WHGZt2kez-right-UheB1QzN68NuW-Yv50sIIQggGdIF8003cFulqPHjgW-left"
      },
      {
        source: "4n77W1iVtft-lM_Fm7sy9",
        sourceHandle: "HZfGOc14Ygt7WHGZt2kez-right",
        target: "KEQut2ksBXdOO-q3KeKI6",
        targetHandle: "UDUYegxBfRf3dkm4FI7W_-left",
        type: "customEdge",
        id: "reactflow__edge-4n77W1iVtft-lM_Fm7sy9HZfGOc14Ygt7WHGZt2kez-right-KEQut2ksBXdOO-q3KeKI6UDUYegxBfRf3dkm4FI7W_-left"
      },
      {
        source: "4n77W1iVtft-lM_Fm7sy9",
        sourceHandle: "HZfGOc14Ygt7WHGZt2kez-right",
        target: "k8s9HxVaKZwBZsxMM7uyw",
        targetHandle: "JcB3ixQ5JvvEcLcqo0ilO-left",
        type: "customEdge",
        id: "reactflow__edge-4n77W1iVtft-lM_Fm7sy9HZfGOc14Ygt7WHGZt2kez-right-k8s9HxVaKZwBZsxMM7uywJcB3ixQ5JvvEcLcqo0ilO-left"
      },
      {
        source: "GMlxxGNJuw8RaYvA7x97o",
        sourceHandle: "T-WEDTeir8rVwstb5yDNB-right",
        target: "k8s9HxVaKZwBZsxMM7uyw",
        targetHandle: "5n0D3MVwww6xp87TgjGuZ-left",
        type: "customEdge",
        id: "reactflow__edge-GMlxxGNJuw8RaYvA7x97oT-WEDTeir8rVwstb5yDNB-right-k8s9HxVaKZwBZsxMM7uyw5n0D3MVwww6xp87TgjGuZ-left"
      },
      {
        source: "GMlxxGNJuw8RaYvA7x97o",
        sourceHandle: "NgP2g79DZIi1d08ayTgVO-right",
        target: "cQjGdDC7ymaT3LmZJ2fzS",
        targetHandle: "MQR2_n8y2DaaBVLCiUWy3-left",
        type: "customEdge",
        id: "reactflow__edge-GMlxxGNJuw8RaYvA7x97oNgP2g79DZIi1d08ayTgVO-right-cQjGdDC7ymaT3LmZJ2fzSMQR2_n8y2DaaBVLCiUWy3-left"
      },
      {
        source: "v7EiTUNzAEOxwLqJuieAA",
        sourceHandle: "lKvC71d8ysfrTE8LZrlJp-right",
        target: "xIWsQ1L1bLv1MQsRaZDzl",
        targetHandle: "eTDBUOZ2V8urXR0OZh3VW-left",
        type: "customEdge",
        id: "reactflow__edge-v7EiTUNzAEOxwLqJuieAAlKvC71d8ysfrTE8LZrlJp-right-xIWsQ1L1bLv1MQsRaZDzleTDBUOZ2V8urXR0OZh3VW-left"
      },
      {
        source: "xIWsQ1L1bLv1MQsRaZDzl",
        sourceHandle: "9dgtmbPTIIS1vGzPQXTwC-right",
        target: "cQjGdDC7ymaT3LmZJ2fzS",
        targetHandle: "MQR2_n8y2DaaBVLCiUWy3-left",
        type: "customEdge",
        id: "reactflow__edge-xIWsQ1L1bLv1MQsRaZDzl9dgtmbPTIIS1vGzPQXTwC-right-cQjGdDC7ymaT3LmZJ2fzSMQR2_n8y2DaaBVLCiUWy3-left"
      },
      {
        source: "R2gVsmHvvb8Sz7F4NLlFi",
        sourceHandle: "lqATyMvzNHWpAafM4xRGS-right",
        target: "v7EiTUNzAEOxwLqJuieAA",
        targetHandle: "OUmHr-J-bizP-nun2-GmK-left",
        type: "customEdge",
        id: "reactflow__edge-R2gVsmHvvb8Sz7F4NLlFilqATyMvzNHWpAafM4xRGS-right-v7EiTUNzAEOxwLqJuieAAOUmHr-J-bizP-nun2-GmK-left"
      },
      {
        source: "3F1aIYS2m8KCD-kscnXGh",
        sourceHandle: "bH0gyeifg0XECO2J76tEb-right",
        target: "cQjGdDC7ymaT3LmZJ2fzS",
        targetHandle: "_DNB57MGZ5h-0TreuiVh5-left",
        type: "customEdge",
        id: "reactflow__edge-3F1aIYS2m8KCD-kscnXGhbH0gyeifg0XECO2J76tEb-right-cQjGdDC7ymaT3LmZJ2fzS_DNB57MGZ5h-0TreuiVh5-left"
      },
      {
        source: "vuFkxivLetAcwF0RpYNAt",
        sourceHandle: "cTmDlpL63yMEs-q61UySG-right",
        target: "cQjGdDC7ymaT3LmZJ2fzS",
        targetHandle: "ikmuT7dpv6Ip97NmsOVRH-left",
        type: "customEdge",
        id: "reactflow__edge-vuFkxivLetAcwF0RpYNAtcTmDlpL63yMEs-q61UySG-right-cQjGdDC7ymaT3LmZJ2fzSikmuT7dpv6Ip97NmsOVRH-left"
      },
      {
        source: "xpqnTxp20-ll_aup-ssRH",
        sourceHandle: "5PG4HxQ6n857m4KsDbrBl-right",
        target: "cQjGdDC7ymaT3LmZJ2fzS",
        targetHandle: "4rMVj7iGIAq4ui-t0gNtu-left",
        type: "customEdge",
        id: "reactflow__edge-xpqnTxp20-ll_aup-ssRH5PG4HxQ6n857m4KsDbrBl-right-cQjGdDC7ymaT3LmZJ2fzS4rMVj7iGIAq4ui-t0gNtu-left"
      },
      {
        source: "v7EiTUNzAEOxwLqJuieAA",
        sourceHandle: "2kB3jp8qAeupR7F-Mc1Ky-right",
        target: "4n77W1iVtft-lM_Fm7sy9",
        targetHandle: "HZfGOc14Ygt7WHGZt2kez-left",
        type: "customEdge",
        id: "reactflow__edge-v7EiTUNzAEOxwLqJuieAA2kB3jp8qAeupR7F-Mc1Ky-right-4n77W1iVtft-lM_Fm7sy9HZfGOc14Ygt7WHGZt2kez-left"
      },
      {
        source: "R2gVsmHvvb8Sz7F4NLlFi",
        sourceHandle: "He9Hmtf6SywPvanFUuIOh-right",
        target: "v7EiTUNzAEOxwLqJuieAA",
        targetHandle: "lKvC71d8ysfrTE8LZrlJp-left",
        type: "customEdge",
        id: "reactflow__edge-R2gVsmHvvb8Sz7F4NLlFiHe9Hmtf6SywPvanFUuIOh-right-v7EiTUNzAEOxwLqJuieAAlKvC71d8ysfrTE8LZrlJp-left"
      }
    ],
    id: "3AIVOMFmgOK78K0NoXt73"
  }
]