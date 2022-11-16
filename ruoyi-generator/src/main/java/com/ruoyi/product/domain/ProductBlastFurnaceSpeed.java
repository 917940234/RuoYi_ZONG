package com.ruoyi.product.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 出铁流速流量预报对象 product_blast_furnace_speed
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
public class ProductBlastFurnaceSpeed extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 出铁流速流量ID */
    private Long blastFurnaceSpeedId;

    /** 外键对应液位ID */
    @Excel(name = "外键对应液位ID")
    private Long blastFurnaceLevelIdIndex;

    /** 1号铁水包流速 */
    @Excel(name = "1号铁水包流速")
    private Double equipmentA1Speed;

    /** 2号铁水包流速 */
    @Excel(name = "2号铁水包流速")
    private Double equipmentA2Speed;

    /** 3号铁水包流速 */
    @Excel(name = "3号铁水包流速")
    private Double equipmentA3Speed;

    /** 6号铁水包流速 */
    @Excel(name = "6号铁水包流速")
    private Double equipmentA6Speed;

    /** 7号铁水包流速 */
    @Excel(name = "7号铁水包流速")
    private Double equipmentA7Speed;

    /** 8号铁水包流速 */
    @Excel(name = "8号铁水包流速")
    private Double equipmentA8Speed;

    /** 1号铁水包流量 */
    @Excel(name = "1号铁水包流量")
    private Double equipmentA1Flow;

    /** 2号铁水包流量 */
    @Excel(name = "2号铁水包流量")
    private Double equipmentA2Flow;

    /** 3号铁水包流量 */
    @Excel(name = "3号铁水包流量")
    private Double equipmentA3Flow;

    /** 6号铁水包流量 */
    @Excel(name = "6号铁水包流量")
    private Double equipmentA6Flow;

    /** 7号铁水包流量 */
    @Excel(name = "7号铁水包流量")
    private Double equipmentA7Flow;

    /** 8号铁水包流量 */
    @Excel(name = "8号铁水包流量")
    private Double equipmentA8Flow;

    public void setBlastFurnaceSpeedId(Long blastFurnaceSpeedId) 
    {
        this.blastFurnaceSpeedId = blastFurnaceSpeedId;
    }

    public Long getBlastFurnaceSpeedId() 
    {
        return blastFurnaceSpeedId;
    }
    public void setBlastFurnaceLevelIdIndex(Long blastFurnaceLevelIdIndex) 
    {
        this.blastFurnaceLevelIdIndex = blastFurnaceLevelIdIndex;
    }

    public Long getBlastFurnaceLevelIdIndex() 
    {
        return blastFurnaceLevelIdIndex;
    }
    public void setEquipmentA1Speed(Double equipmentA1Speed) 
    {
        this.equipmentA1Speed = equipmentA1Speed;
    }

    public Double getEquipmentA1Speed() 
    {
        return equipmentA1Speed;
    }
    public void setEquipmentA2Speed(Double equipmentA2Speed) 
    {
        this.equipmentA2Speed = equipmentA2Speed;
    }

    public Double getEquipmentA2Speed() 
    {
        return equipmentA2Speed;
    }
    public void setEquipmentA3Speed(Double equipmentA3Speed) 
    {
        this.equipmentA3Speed = equipmentA3Speed;
    }

    public Double getEquipmentA3Speed() 
    {
        return equipmentA3Speed;
    }
    public void setEquipmentA6Speed(Double equipmentA6Speed) 
    {
        this.equipmentA6Speed = equipmentA6Speed;
    }

    public Double getEquipmentA6Speed() 
    {
        return equipmentA6Speed;
    }
    public void setEquipmentA7Speed(Double equipmentA7Speed) 
    {
        this.equipmentA7Speed = equipmentA7Speed;
    }

    public Double getEquipmentA7Speed() 
    {
        return equipmentA7Speed;
    }
    public void setEquipmentA8Speed(Double equipmentA8Speed) 
    {
        this.equipmentA8Speed = equipmentA8Speed;
    }

    public Double getEquipmentA8Speed() 
    {
        return equipmentA8Speed;
    }
    public void setEquipmentA1Flow(Double equipmentA1Flow) 
    {
        this.equipmentA1Flow = equipmentA1Flow;
    }

    public Double getEquipmentA1Flow() 
    {
        return equipmentA1Flow;
    }
    public void setEquipmentA2Flow(Double equipmentA2Flow) 
    {
        this.equipmentA2Flow = equipmentA2Flow;
    }

    public Double getEquipmentA2Flow() 
    {
        return equipmentA2Flow;
    }
    public void setEquipmentA3Flow(Double equipmentA3Flow) 
    {
        this.equipmentA3Flow = equipmentA3Flow;
    }

    public Double getEquipmentA3Flow() 
    {
        return equipmentA3Flow;
    }
    public void setEquipmentA6Flow(Double equipmentA6Flow) 
    {
        this.equipmentA6Flow = equipmentA6Flow;
    }

    public Double getEquipmentA6Flow() 
    {
        return equipmentA6Flow;
    }
    public void setEquipmentA7Flow(Double equipmentA7Flow) 
    {
        this.equipmentA7Flow = equipmentA7Flow;
    }

    public Double getEquipmentA7Flow() 
    {
        return equipmentA7Flow;
    }
    public void setEquipmentA8Flow(Double equipmentA8Flow) 
    {
        this.equipmentA8Flow = equipmentA8Flow;
    }

    public Double getEquipmentA8Flow() 
    {
        return equipmentA8Flow;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("blastFurnaceSpeedId", getBlastFurnaceSpeedId())
            .append("blastFurnaceLevelIdIndex", getBlastFurnaceLevelIdIndex())
            .append("equipmentA1Speed", getEquipmentA1Speed())
            .append("equipmentA2Speed", getEquipmentA2Speed())
            .append("equipmentA3Speed", getEquipmentA3Speed())
            .append("equipmentA6Speed", getEquipmentA6Speed())
            .append("equipmentA7Speed", getEquipmentA7Speed())
            .append("equipmentA8Speed", getEquipmentA8Speed())
            .append("equipmentA1Flow", getEquipmentA1Flow())
            .append("equipmentA2Flow", getEquipmentA2Flow())
            .append("equipmentA3Flow", getEquipmentA3Flow())
            .append("equipmentA6Flow", getEquipmentA6Flow())
            .append("equipmentA7Flow", getEquipmentA7Flow())
            .append("equipmentA8Flow", getEquipmentA8Flow())
            .toString();
    }
}
