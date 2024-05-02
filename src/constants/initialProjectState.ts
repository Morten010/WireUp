export const initialProjectState = [
  {
    "description": "Simple schema for a workout app",
    "name": "Workout app",
    "schemas": [
      {
        "id": "AsNWVu9cM1zU6S6x_5Sdh",
        "position": {
          "x": 103.68,
          "y": 153.72287578124997
        },
        "data": {
          "columns": [
            {
              "id": "EmxzuMCmb2sMZ1Gfghlv-",
              "name": "id",
              "value": "int",
              "nullable": false,
              "relations": [
                {
                  "columnOne": "EmxzuMCmb2sMZ1Gfghlv-",
                  "columnTwo": "rR-tnNbSgjPfb_bFEO9_o",
                  "connectionType": "one-to-one",
                  "tableOne": "AsNWVu9cM1zU6S6x_5Sdh",
                  "tableTwo": "0QpPPTsfn6wQGRjGU01bw"
                }
              ]
            },
            {
              "id": "B77lEKMXMFGZQUhbWmy0-",
              "name": "username",
              "value": "varchar",
              "nullable": false
            },
            {
              "id": "ZfxzeNO0A0ONew3A5GKli",
              "name": "hashedPassword",
              "value": "varchar",
              "nullable": false
            }
          ],
          "id": "AsNWVu9cM1zU6S6x_5Sdh",
          "name": "User"
        }
      },
      {
        "id": "0QpPPTsfn6wQGRjGU01bw",
        "position": {
          "x": 435.7595959103269,
          "y": 234.09733789784303
        },
        "data": {
          "columns": [
            {
              "id": "tNILp-menFniRhuHOg9Na",
              "name": "id",
              "value": "int",
              "nullable": false,
              "relations": [
                {
                  "columnOne": "tNILp-menFniRhuHOg9Na",
                  "columnTwo": "eOztsQx5KaBK7Ez2KUNa5",
                  "connectionType": "one-to-one",
                  "tableOne": "0QpPPTsfn6wQGRjGU01bw",
                  "tableTwo": "boypF6qfKBY_JMTFPvS8e"
                }
              ]
            },
            {
              "id": "j_AVOjw0cjG7ExOJmho7n",
              "name": "workoutName",
              "value": "varchar",
              "nullable": false
            },
            {
              "id": "rR-tnNbSgjPfb_bFEO9_o",
              "name": "userId",
              "value": "int",
              "nullable": false,
              "relations": [
                {
                  "columnOne": "EmxzuMCmb2sMZ1Gfghlv-",
                  "columnTwo": "rR-tnNbSgjPfb_bFEO9_o",
                  "connectionType": "one-to-one",
                  "tableOne": "AsNWVu9cM1zU6S6x_5Sdh",
                  "tableTwo": "0QpPPTsfn6wQGRjGU01bw"
                }
              ]
            }
          ],
          "id": "0QpPPTsfn6wQGRjGU01bw",
          "name": "Workouts"
        }
      },
      {
        "id": "boypF6qfKBY_JMTFPvS8e",
        "position": {
          "x": 785.4066641614297,
          "y": 251.1221768036682
        },
        "data": {
          "columns": [
            {
              "id": "QOr1fAyqfM8twNPMEX3W_",
              "name": "id",
              "value": "int",
              "nullable": false
            },
            {
              "id": "eOztsQx5KaBK7Ez2KUNa5",
              "name": "WorkoutId",
              "value": "int",
              "nullable": false,
              "relations": [
                {
                  "columnOne": "tNILp-menFniRhuHOg9Na",
                  "columnTwo": "eOztsQx5KaBK7Ez2KUNa5",
                  "connectionType": "one-to-one",
                  "tableOne": "0QpPPTsfn6wQGRjGU01bw",
                  "tableTwo": "boypF6qfKBY_JMTFPvS8e"
                }
              ]
            },
            {
              "id": "MzZXMdmiju0gBrFNjwNWz",
              "name": "name",
              "value": "varchar",
              "nullable": false
            },
            {
              "id": "j0YeAS0M_rwCZEx3DyytK",
              "name": "reps",
              "value": "int",
              "nullable": false
            },
            {
              "id": "OP3bdvsfu_6iVINxjHyu1",
              "name": "sets",
              "value": "int",
              "nullable": false
            }
          ],
          "id": "boypF6qfKBY_JMTFPvS8e",
          "name": "Exercise"
        }
      }
    ],
    "edges": [
      {
        "source": "AsNWVu9cM1zU6S6x_5Sdh",
        "sourceHandle": "EmxzuMCmb2sMZ1Gfghlv--right",
        "target": "0QpPPTsfn6wQGRjGU01bw",
        "targetHandle": "rR-tnNbSgjPfb_bFEO9_o-left",
        "type": "customEdge",
        "id": "reactflow__edge-AsNWVu9cM1zU6S6x_5SdhEmxzuMCmb2sMZ1Gfghlv--right-0QpPPTsfn6wQGRjGU01bwrR-tnNbSgjPfb_bFEO9_o-left"
      },
      {
        "source": "0QpPPTsfn6wQGRjGU01bw",
        "sourceHandle": "tNILp-menFniRhuHOg9Na-right",
        "target": "boypF6qfKBY_JMTFPvS8e",
        "targetHandle": "eOztsQx5KaBK7Ez2KUNa5-left",
        "type": "customEdge",
        "id": "reactflow__edge-0QpPPTsfn6wQGRjGU01bwtNILp-menFniRhuHOg9Na-right-boypF6qfKBY_JMTFPvS8eeOztsQx5KaBK7Ez2KUNa5-left"
      }
    ],
    "id": "VCjC9X_-F6OeRH_KQpP3T"
  }
]