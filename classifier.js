
(function() {
    var CLASSIFICATION = { 
        APPROVED: 1,
        REPROVED: 2,
        DROPOUT: 3
    }
    
    
    var decisionTreeClassifier = function(item) {
        var mediaFinal = item.mediaFinal
        var faltas = item.faltas
        var renda = item.renda
        var coefRendimento = item.coefRendimento
        var frequencia = item.frequencia
    
        if (mediaFinal <= 59.6299972534) {
            if (faltas <= 0.5) {
                if (mediaFinal <= 0.10000000149) {
                    if (renda <= 1405.5) {
                        return [[0., 1519., 1210.]]
                    } else {
                        if (renda <= 7027.5) {
                            if (renda <= 3748.0) {
                                if (renda <= 2342.5) {
                                    return [[0., 325., 333.]]
                                } else {
                                    return [[0., 484., 492.]]
                                }
                            } else {
                                return [[0., 338., 469.]]
                            }
                        } else {
                            if (renda <= 14055.0) {
                                return [[0., 239., 215.]]
                            } else {
                                return [[0., 92., 72.]]
                            }
                        }
                    }
                } else {
                    if (mediaFinal <= 21.0149993896) {
                        if (renda <= 1405.5) {
                            if (coefRendimento <= 12.9650001526) {
                                if (mediaFinal <= 5.26999998093) {
                                    if (mediaFinal <= 3.98000001907) {
                                        if (coefRendimento <= 2.78499984741) {
                                            return [[0., 2., 15.]]
                                        } else {
                                            return [[0., 0., 9.]]
                                        }
                                    } else {
                                        if (frequencia <= 4.32499980927) {
                                            return [[0., 3., 10.]]
                                        } else {
                                            return [[0., 5., 7.]]
                                        }
                                    }
                                } else {
                                    if (frequencia <= 11.0599994659) {
                                        if (mediaFinal <= 9.94000053406) {
                                            if (frequencia <= 8.34499931335) {
                                                return [[0., 2., 27.]]
                                            } else {
                                                return [[0., 0., 16.]]
                                            }
                                        } else {
                                            if (coefRendimento <= 10.5) {
                                                return [[0., 6., 41.]]
                                            } else {
                                                return [[0., 1., 9.]]
                                            }
                                        }
                                    } else {
                                        if (frequencia <= 11.8699998856) {
                                            return [[0., 0., 4.]]
                                        } else {
                                            if (mediaFinal <= 12.4650001526) {
                                                return [[0., 1., 23.]]
                                            } else {
                                                return [[0., 0., 1.]]
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (frequencia <= 18.5) {
                                    if (coefRendimento <= 13.5) {
                                        return [[0., 4., 11.]]
                                    } else {
                                        if (mediaFinal <= 16.8549995422) {
                                            if (frequencia <= 15.5) {
                                                return [[0., 8., 32.]]
                                            } else {
                                                return [[0., 2., 23.]]
                                            }
                                        } else {
                                            if (frequencia <= 17.0900001526) {
                                                return [[0., 4., 12.]]
                                            } else {
                                                return [[0., 6., 24.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (mediaFinal <= 19.5) {
                                        return [[0., 3., 19.]]
                                    } else {
                                        if (mediaFinal <= 20.5) {
                                            return [[0., 1., 10.]]
                                        } else {
                                            return [[0., 1., 9.]]
                                        }
                                    }
                                }
                            }
                        } else {
                            if (frequencia <= 5.85999965668) {
                                return [[0., 0., 37.]]
                            } else {
                                if (frequencia <= 10.5) {
                                    if (renda <= 7027.5) {
                                        if (mediaFinal <= 7.5) {
                                            return [[0., 0., 7.]]
                                        } else {
                                            if (renda <= 3748.0) {
                                                return [[0., 2., 31.]]
                                            } else {
                                                return [[0., 1., 5.]]
                                            }
                                        }
                                    } else {
                                        return [[0., 1., 2.]]
                                    }
                                } else {
                                    if (frequencia <= 18.5) {
                                        if (mediaFinal <= 16.9300003052) {
                                            if (renda <= 3748.0) {
                                                return [[0., 0., 60.]]
                                            } else {
                                                return [[0., 2., 42.]]
                                            }
                                        } else {
                                            if (renda <= 2342.5) {
                                                return [[0., 1., 4.]]
                                            } else {
                                                return [[0., 1., 23.]]
                                            }
                                        }
                                    } else {
                                        return [[0., 0., 21.]]
                                    }
                                }
                            }
                        }
                    } else {
                        if (mediaFinal <= 52.3899993896) {
                            if (mediaFinal <= 52.2799987793) {
                                if (renda <= 1405.5) {
                                    if (mediaFinal <= 33.2700004578) {
                                        if (coefRendimento <= 28.7099990845) {
                                            return [[0., 0., 149.]]
                                        } else {
                                            return [[0., 1., 13.]]
                                        }
                                    } else {
                                        if (mediaFinal <= 33.9000015259) {
                                            return [[0., 3., 3.]]
                                        } else {
                                            if (mediaFinal <= 48.9199981689) {
                                                return [[0., 11., 199.]]
                                            } else {
                                                return [[0., 0., 55.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (coefRendimento <= 28.5) {
                                        return [[0., 0., 463.]]
                                    } else {
                                        return [[0., 1., 8.]]
                                    }
                                }
                            } else {
                                return [[0., 6., 0.]]
                            }
                        } else {
                            return [[0., 0., 182.]]
                        }
                    }
                }
            } else {
                if (coefRendimento <= 0.574999988079) {
                    if (faltas <= 19.5) {
                        if (renda <= 2342.5) {
                            if (faltas <= 4.5) {
                                if (renda <= 1405.5) {
                                    if (faltas <= 1.5) {
                                        return [[0., 1., 3.]]
                                    } else {
                                        if (faltas <= 3.5) {
                                            if (faltas <= 2.5) {
                                                return [[0., 28., 18.]]
                                            } else {
                                                return [[0., 3., 0.]]
                                            }
                                        } else {
                                            return [[0., 26., 27.]]
                                        }
                                    }
                                } else {
                                    if (faltas <= 3.5) {
                                        if (faltas <= 2.5) {
                                            return [[0., 10., 16.]]
                                        } else {
                                            return [[0., 5., 1.]]
                                        }
                                    } else {
                                        return [[0., 5., 11.]]
                                    }
                                }
                            } else {
                                if (faltas <= 15.5) {
                                    if (faltas <= 5.5) {
                                        return [[0., 3., 16.]]
                                    } else {
                                        if (mediaFinal <= 0.259999990463) {
                                            if (renda <= 1405.5) {
                                                return [[0., 93., 170.]]
                                            } else {
                                                return [[0., 26., 63.]]
                                            }
                                        } else {
                                            return [[0., 1., 0.]]
                                        }
                                    }
                                } else {
                                    if (faltas <= 16.5) {
                                        if (renda <= 1405.5) {
                                            return [[0., 6., 27.]]
                                        } else {
                                            return [[0., 3., 6.]]
                                        }
                                    } else {
                                        if (renda <= 1405.5) {
                                            if (faltas <= 18.5) {
                                                return [[0., 5., 31.]]
                                            } else {
                                                return [[0., 1., 2.]]
                                            }
                                        } else {
                                            return [[0., 1., 15.]]
                                        }
                                    }
                                }
                            }
                        } else {
                            if (renda <= 7027.5) {
                                if (faltas <= 3.5) {
                                    if (faltas <= 2.5) {
                                        if (renda <= 3748.0) {
                                            if (faltas <= 1.5) {
                                                return [[0., 0., 1.]]
                                            } else {
                                                return [[0., 9., 18.]]
                                            }
                                        } else {
                                            if (faltas <= 1.5) {
                                                return [[0., 1., 1.]]
                                            } else {
                                                return [[0., 5., 22.]]
                                            }
                                        }
                                    } else {
                                        return [[0., 6., 4.]]
                                    }
                                } else {
                                    if (faltas <= 7.0) {
                                        if (faltas <= 5.5) {
                                            if (renda <= 3748.0) {
                                                return [[0., 5., 17.]]
                                            } else {
                                                return [[0., 4., 21.]]
                                            }
                                        } else {
                                            if (renda <= 3748.0) {
                                                return [[0., 8., 16.]]
                                            } else {
                                                return [[0., 6., 18.]]
                                            }
                                        }
                                    } else {
                                        if (faltas <= 13.5) {
                                            if (faltas <= 12.5) {
                                                return [[0., 16., 86.]]
                                            } else {
                                                return [[0., 0., 2.]]
                                            }
                                        } else {
                                            if (faltas <= 14.5) {
                                                return [[0., 10., 19.]]
                                            } else {
                                                return [[0., 15., 65.]]
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (renda <= 14055.0) {
                                    if (faltas <= 10.5) {
                                        if (faltas <= 3.5) {
                                            return [[0., 4., 12.]]
                                        } else {
                                            if (faltas <= 5.0) {
                                                return [[0., 0., 9.]]
                                            } else {
                                                return [[0., 4., 27.]]
                                            }
                                        }
                                    } else {
                                        return [[0., 0., 38.]]
                                    }
                                } else {
                                    if (faltas <= 6.5) {
                                        return [[0., 1., 16.]]
                                    } else {
                                        if (faltas <= 7.5) {
                                            return [[0., 1., 0.]]
                                        } else {
                                            if (faltas <= 8.5) {
                                                return [[0., 1., 1.]]
                                            } else {
                                                return [[0., 8., 19.]]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (faltas <= 30.5) {
                            if (renda <= 1405.5) {
                                if (faltas <= 28.5) {
                                    if (faltas <= 20.5) {
                                        return [[0., 7., 33.]]
                                    } else {
                                        if (faltas <= 21.5) {
                                            return [[0., 0., 12.]]
                                        } else {
                                            if (faltas <= 25.5) {
                                                return [[0., 7., 66.]]
                                            } else {
                                                return [[0., 11., 84.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (faltas <= 29.5) {
                                        return [[0., 2., 3.]]
                                    } else {
                                        return [[0., 11., 56.]]
                                    }
                                }
                            } else {
                                if (faltas <= 27.5) {
                                    if (faltas <= 25.5) {
                                        if (faltas <= 24.5) {
                                            if (renda <= 3748.0) {
                                                return [[0., 7., 113.]]
                                            } else {
                                                return [[0., 10., 109.]]
                                            }
                                        } else {
                                            return [[0., 3., 13.]]
                                        }
                                    } else {
                                        if (renda <= 3748.0) {
                                            if (faltas <= 26.5) {
                                                return [[0., 2., 23.]]
                                            } else {
                                                return [[0., 1., 21.]]
                                            }
                                        } else {
                                            if (faltas <= 26.5) {
                                                return [[0., 0., 27.]]
                                            } else {
                                                return [[0., 1., 13.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (renda <= 3748.0) {
                                        if (faltas <= 28.5) {
                                            if (renda <= 2342.5) {
                                                return [[0., 2., 11.]]
                                            } else {
                                                return [[0., 1., 16.]]
                                            }
                                        } else {
                                            if (renda <= 2342.5) {
                                                return [[0., 2., 22.]]
                                            } else {
                                                return [[0., 6., 25.]]
                                            }
                                        }
                                    } else {
                                        if (renda <= 7027.5) {
                                            if (faltas <= 29.5) {
                                                return [[0., 1., 19.]]
                                            } else {
                                                return [[0., 3., 32.]]
                                            }
                                        } else {
                                            if (faltas <= 28.5) {
                                                return [[0., 2., 9.]]
                                            } else {
                                                return [[0., 2., 24.]]
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (faltas <= 55.5) {
                                if (faltas <= 50.5) {
                                    if (faltas <= 36.5) {
                                        if (faltas <= 35.5) {
                                            if (renda <= 1405.5) {
                                                return [[0., 8., 95.]]
                                            } else {
                                                return [[0., 6., 167.]]
                                            }
                                        } else {
                                            if (renda <= 3748.0) {
                                                return [[0., 14., 115.]]
                                            } else {
                                                return [[0., 4., 55.]]
                                            }
                                        }
                                    } else {
                                        if (renda <= 7027.5) {
                                            if (renda <= 1405.5) {
                                                return [[0., 10., 435.]]
                                            } else {
                                                return [[0., 20., 549.]]
                                            }
                                        } else {
                                            if (faltas <= 45.5) {
                                                return [[0., 5., 102.]]
                                            } else {
                                                return [[0., 5., 40.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (renda <= 1405.5) {
                                        if (faltas <= 52.5) {
                                            if (faltas <= 51.5) {
                                                return [[0., 1., 28.]]
                                            } else {
                                                return [[0., 1., 53.]]
                                            }
                                        } else {
                                            return [[0., 0., 87.]]
                                        }
                                    } else {
                                        return [[0., 0., 237.]]
                                    }
                                }
                            } else {
                                if (faltas <= 60.5) {
                                    if (faltas <= 56.5) {
                                        if (renda <= 1405.5) {
                                            if (mediaFinal <= 0.10000000149) {
                                                return [[0., 11., 38.]]
                                            } else {
                                                return [[0., 0., 1.]]
                                            }
                                        } else {
                                            if (renda <= 14055.0) {
                                                return [[0., 6., 51.]]
                                            } else {
                                                return [[0., 0., 2.]]
                                            }
                                        }
                                    } else {
                                        if (faltas <= 59.5) {
                                            if (renda <= 7027.5) {
                                                return [[0., 3., 172.]]
                                            } else {
                                                return [[0., 2., 30.]]
                                            }
                                        } else {
                                            if (renda <= 7027.5) {
                                                return [[0., 35., 319.]]
                                            } else {
                                                return [[0., 13., 49.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (faltas <= 77.5) {
                                        if (faltas <= 72.5) {
                                            if (renda <= 1405.5) {
                                                return [[0., 18., 263.]]
                                            } else {
                                                return [[0., 11., 404.]]
                                            }
                                        } else {
                                            if (renda <= 7027.5) {
                                                return [[0., 1., 217.]]
                                            } else {
                                                return [[0., 3., 38.]]
                                            }
                                        }
                                    } else {
                                        if (faltas <= 80.5) {
                                            if (renda <= 7027.5) {
                                                return [[0., 26., 234.]]
                                            } else {
                                                return [[0., 2., 43.]]
                                            }
                                        } else {
                                            if (renda <= 1405.5) {
                                                return [[0., 0., 74.]]
                                            } else {
                                                return [[0., 9., 122.]]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (mediaFinal <= 52.3899993896) {
                        if (frequencia <= 52.1749992371) {
                            if (faltas <= 9.5) {
                                if (frequencia <= 21.1599998474) {
                                    if (faltas <= 3.5) {
                                        if (frequencia <= 11.5) {
                                            return [[0., 0., 40.]]
                                        } else {
                                            if (mediaFinal <= 16.5) {
                                                return [[0., 4., 24.]]
                                            } else {
                                                return [[0., 2., 36.]]
                                            }
                                        }
                                    } else {
                                        if (faltas <= 5.5) {
                                            return [[0., 0., 63.]]
                                        } else {
                                            if (coefRendimento <= 19.5) {
                                                return [[0., 4., 172.]]
                                            } else {
                                                return [[0., 0., 29.]]
                                            }
                                        }
                                    }
                                } else {
                                    if (faltas <= 3.5) {
                                        return [[0., 0., 281.]]
                                    } else {
                                        if (mediaFinal <= 27.5) {
                                            return [[0., 0., 83.]]
                                        } else {
                                            if (frequencia <= 31.5) {
                                                return [[0., 2., 72.]]
                                            } else {
                                                return [[0., 4., 476.]]
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (mediaFinal <= 43.5) {
                                    if (coefRendimento <= 23.5) {
                                        if (coefRendimento <= 22.9300003052) {
                                            if (coefRendimento <= 20.0450000763) {
                                                return [[0., 19., 2389.]]
                                            } else {
                                                return [[0., 0., 154.]]
                                            }
                                        } else {
                                            if (renda <= 3748.0) {
                                                return [[0., 0., 36.]]
                                            } else {
                                                return [[0., 2., 8.]]
                                            }
                                        }
                                    } else {
                                        if (renda <= 7027.5) {
                                            return [[0., 0., 451.]]
                                        } else {
                                            if (coefRendimento <= 27.5) {
                                                return [[0., 0., 49.]]
                                            } else {
                                                return [[0., 1., 19.]]
                                            }
                                        }
                                    }
                                } else {
                                    return [[0., 0., 374.]]
                                }
                            }
                        } else {
                            return [[0., 2., 0.]]
                        }
                    } else {
                        return [[0., 0., 420.]]
                    }
                }
            }
        } else {
            if (renda <= 1405.5) {
                if (faltas <= 0.5) {
                    if (mediaFinal <= 96.5) {
                        if (frequencia <= 75.6699981689) {
                            if (coefRendimento <= 73.4100036621) {
                                if (mediaFinal <= 61.3799972534) {
                                    if (coefRendimento <= 32.0200004578) {
                                        return [[502., 1., 0.]]
                                    } else {
                                        return [[149., 0., 0.]]
                                    }
                                } else {
                                    if (frequencia <= 61.8799972534) {
                                        return [[0., 1., 0.]]
                                    } else {
                                        if (frequencia <= 62.5950012207) {
                                            return [[171., 0., 0.]]
                                        } else {
                                            if (frequencia <= 62.9049987793) {
                                                return [[1., 1., 0.]]
                                            } else {
                                                return [[1684., 6., 0.]]
                                            }
                                        }
                                    }
                                }
                            } else {
                                return [[379., 0., 0.]]
                            }
                        } else {
                            if (coefRendimento <= 79.9049987793) {
                                if (coefRendimento <= 79.4049987793) {
                                    if (frequencia <= 76.5) {
                                        return [[181., 1., 0.]]
                                    } else {
                                        if (mediaFinal <= 78.3849945068) {
                                            if (frequencia <= 77.1450042725) {
                                                return [[128., 3., 0.]]
                                            } else {
                                                return [[189., 3., 0.]]
                                            }
                                        } else {
                                            if (frequencia <= 78.9550018311) {
                                                return [[4., 0., 0.]]
                                            } else {
                                                return [[144., 1., 0.]]
                                            }
                                        }
                                    }
                                } else {
                                    return [[0., 1., 0.]]
                                }
                            } else {
                                if (mediaFinal <= 83.5) {
                                    if (mediaFinal <= 81.5) {
                                        if (frequencia <= 80.9649963379) {
                                            if (mediaFinal <= 80.3249969482) {
                                                return [[393., 1., 0.]]
                                            } else {
                                                return [[2., 0., 0.]]
                                            }
                                        } else {
                                            return [[159., 1., 0.]]
                                        }
                                    } else {
                                        return [[332., 0., 0.]]
                                    }
                                } else {
                                    if (mediaFinal <= 92.7400054932) {
                                        if (coefRendimento <= 92.3450012207) {
                                            if (mediaFinal <= 88.125) {
                                                return [[916., 9., 0.]]
                                            } else {
                                                return [[716., 2., 0.]]
                                            }
                                        } else {
                                            return [[2., 4., 0.]]
                                        }
                                    } else {
                                        if (coefRendimento <= 93.8899993896) {
                                            return [[131., 0., 0.]]
                                        } else {
                                            if (mediaFinal <= 95.6450042725) {
                                                return [[251., 1., 0.]]
                                            } else {
                                                return [[120., 1., 0.]]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        return [[755., 0., 0.]]
                    }
                } else {
                    if (mediaFinal <= 92.5) {
                        if (frequencia <= 77.5) {
                            if (coefRendimento <= 71.5) {
                                if (mediaFinal <= 61.3799972534) {
                                    return [[849., 0., 0.]]
                                } else {
                                    if (coefRendimento <= 61.8799972534) {
                                        return [[1., 1., 0.]]
                                    } else {
                                        if (faltas <= 7.5) {
                                            if (frequencia <= 64.5) {
                                                return [[366., 1., 0.]]
                                            } else {
                                                return [[892., 0., 0.]]
                                            }
                                        } else {
                                            if (faltas <= 10.5) {
                                                return [[501., 3., 0.]]
                                            } else {
                                                return [[825., 1., 0.]]
                                            }
                                        }
                                    }
                                }
                            } else {
                                return [[1766., 0., 0.]]
                            }
                        } else {
                            if (faltas <= 3.5) {
                                return [[1002., 0., 0.]]
                            } else {
                                if (faltas <= 29.5) {
                                    if (faltas <= 15.5) {
                                        if (faltas <= 14.5) {
                                            if (coefRendimento <= 83.5) {
                                                return [[1076., 2., 0.]]
                                            } else {
                                                return [[1402., 8., 0.]]
                                            }
                                        } else {
                                            if (frequencia <= 81.5) {
                                                return [[19., 1., 0.]]
                                            } else {
                                                return [[34., 0., 0.]]
                                            }
                                        }
                                    } else {
                                        return [[371., 0., 0.]]
                                    }
                                } else {
                                    if (coefRendimento <= 79.4049987793) {
                                        return [[10., 1., 0.]]
                                    } else {
                                        return [[36., 0., 0.]]
                                    }
                                }
                            }
                        }
                    } else {
                        return [[912., 0., 0.]]
                    }
                }
            } else {
                if (faltas <= 3.5) {
                    if (frequencia <= 92.2550048828) {
                        if (renda <= 3748.0) {
                            if (frequencia <= 88.9000015259) {
                                if (frequencia <= 88.4000015259) {
                                    if (coefRendimento <= 83.5) {
                                        if (mediaFinal <= 73.5) {
                                            if (mediaFinal <= 68.6199951172) {
                                                return [[1616., 2., 0.]]
                                            } else {
                                                return [[783., 5., 0.]]
                                            }
                                        } else {
                                            return [[1826., 0., 0.]]
                                        }
                                    } else {
                                        if (renda <= 2342.5) {
                                            if (faltas <= 2.5) {
                                                return [[346., 4., 0.]]
                                            } else {
                                                return [[31., 0., 0.]]
                                            }
                                        } else {
                                            if (coefRendimento <= 84.5) {
                                                return [[104., 0., 0.]]
                                            } else {
                                                return [[387., 2., 0.]]
                                            }
                                        }
                                    }
                                } else {
                                    return [[1., 1., 0.]]
                                }
                            } else {
                                return [[743., 0., 0.]]
                            }
                        } else {
                            if (mediaFinal <= 91.5) {
                                if (faltas <= 0.5) {
                                    if (renda <= 14055.0) {
                                        if (frequencia <= 69.5) {
                                            return [[927., 0., 0.]]
                                        } else {
                                            if (coefRendimento <= 70.3499984741) {
                                                return [[154., 1., 0.]]
                                            } else {
                                                return [[2.07700000e+03, 1.00000000e+00, 0.00000000e+00]]
                                            }
                                        }
                                    } else {
                                        if (mediaFinal <= 60.5) {
                                            return [[37., 1., 0.]]
                                        } else {
                                            return [[264., 0., 0.]]
                                        }
                                    }
                                } else {
                                    return [[1458., 0., 0.]]
                                }
                            } else {
                                if (faltas <= 2.5) {
                                    return [[118., 0., 0.]]
                                } else {
                                    return [[15., 1., 0.]]
                                }
                            }
                        }
                    } else {
                        return [[2161., 0., 0.]]
                    }
                } else {
                    if (renda <= 2342.5) {
                        if (faltas <= 10.5) {
                            return [[1837., 0., 0.]]
                        } else {
                            if (mediaFinal <= 74.5) {
                                if (faltas <= 11.5) {
                                    return [[15., 1., 0.]]
                                } else {
                                    if (faltas <= 17.5) {
                                        return [[313., 0., 0.]]
                                    } else {
                                        if (faltas <= 20.5) {
                                            if (frequencia <= 73.5) {
                                                return [[86., 1., 0.]]
                                            } else {
                                                return [[5., 1., 0.]]
                                            }
                                        } else {
                                            return [[139., 0., 0.]]
                                        }
                                    }
                                }
                            } else {
                                return [[500., 0., 0.]]
                            }
                        }
                    } else {
                        return [[10718., 0., 0.]]
                    }
                }
            }
        }
    }
    
    window.CLASSIFICATION = CLASSIFICATION
    
    window.riaClassifier = function(item) {
        var result = decisionTreeClassifier(item)
        var apprFactor = result[0][0]
        var dropFactor = result[0][1]
        var reprFactor = result[0][2]
        
        if (dropFactor >= reprFactor && dropFactor >= apprFactor) {
            return CLASSIFICATION.DROPOUT
        }
    
        if (reprFactor >= apprFactor && reprFactor >= dropFactor) {
            return CLASSIFICATION.REPROVED
        }
    
        return CLASSIFICATION.APPROVED
    }
})()

