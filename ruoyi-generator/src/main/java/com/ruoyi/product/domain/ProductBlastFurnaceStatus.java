package com.ruoyi.product.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 铁水包状态对象 product_blast_furnace_status
 * 
 * @author zongyoucheng
 * @date 2022-10-10
 */
public class ProductBlastFurnaceStatus extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 铁水包状态模块ID */
    private Long blastFurnaceStatusId;

    /** 日期（已存在） */
    @Excel(name = "日期", readConverterExp = "已=存在")
    private String dateExisted;

    /** 时间（已存在） */
    @Excel(name = "时间", readConverterExp = "已=存在")
    private String timeExisted;

    /** 1号铁水罐状态 */
    @Excel(name = "1号铁水罐状态")
    private Long equipmentA1State;

    /** 2号铁水罐状态 */
    @Excel(name = "2号铁水罐状态")
    private Long equipmentA2State;

    /** 3号铁水罐状态 */
    @Excel(name = "3号铁水罐状态")
    private Long equipmentA3State;

    /** 6号铁水罐状态 */
    @Excel(name = "6号铁水罐状态")
    private Long equipmentA6State;

    /** 7号铁水罐状态 */
    @Excel(name = "7号铁水罐状态")
    private Long equipmentA7State;

    /** 8号铁水罐状态 */
    @Excel(name = "8号铁水罐状态")
    private Long equipmentA8State;

    public void setBlastFurnaceStatusId(Long blastFurnaceStatusId) 
    {
        this.blastFurnaceStatusId = blastFurnaceStatusId;
    }

    public Long getBlastFurnaceStatusId() 
    {
        return blastFurnaceStatusId;
    }
    public void setDateExisted(String dateExisted) 
    {
        this.dateExisted = dateExisted;
    }

    public String getDateExisted() 
    {
        return dateExisted;
    }
    public void setTimeExisted(String timeExisted) 
    {
        this.timeExisted = timeExisted;
    }

    public String getTimeExisted() 
    {
        return timeExisted;
    }
    public void setEquipmentA1State(Long equipmentA1State) 
    {
        this.equipmentA1State = equipmentA1State;
    }

    public Long getEquipmentA1State() 
    {
        return equipmentA1State;
    }
    public void setEquipmentA2State(Long equipmentA2State) 
    {
        this.equipmentA2State = equipmentA2State;
    }

    public Long getEquipmentA2State() 
    {
        return equipmentA2State;
    }
    public void setEquipmentA3State(Long equipmentA3State) 
    {
        this.equipmentA3State = equipmentA3State;
    }

    public Long getEquipmentA3State() 
    {
        return equipmentA3State;
    }
    public void setEquipmentA6State(Long equipmentA6State) 
    {
        this.equipmentA6State = equipmentA6State;
    }

    public Long getEquipmentA6State() 
    {
        return equipmentA6State;
    }
    public void setEquipmentA7State(Long equipmentA7State) 
    {
        this.equipmentA7State = equipmentA7State;
    }

    public Long getEquipmentA7State() 
    {
        return equipmentA7State;
    }
    public void setEquipmentA8State(Long equipmentA8State) 
    {
        this.equipmentA8State = equipmentA8State;
    }

    public Long getEquipmentA8State() 
    {
        return equipmentA8State;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("blastFurnaceStatusId", getBlastFurnaceStatusId())
            .append("dateExisted", getDateExisted())
            .append("timeExisted", getTimeExisted())
            .append("equipmentA1State", getEquipmentA1State())
            .append("equipmentA2State", getEquipmentA2State())
            .append("equipmentA3State", getEquipmentA3State())
            .append("equipmentA6State", getEquipmentA6State())
            .append("equipmentA7State", getEquipmentA7State())
            .append("equipmentA8State", getEquipmentA8State())
            .toString();
    }
}
