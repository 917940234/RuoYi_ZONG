package com.ruoyi.product.service;

import java.util.List;
import com.ruoyi.product.domain.ProductBlastFurnaceStatus;

/**
 * 铁水包状态Service接口
 * 
 * @author zongyoucheng
 * @date 2022-11-24
 */
public interface IProductBlastFurnaceStatusService 
{
    /**
     * 查询铁水包状态
     * 
     * @param blastFurnaceStatusId 铁水包状态主键
     * @return 铁水包状态
     */
    public ProductBlastFurnaceStatus selectProductBlastFurnaceStatusByBlastFurnaceStatusId(Long blastFurnaceStatusId);

    /**
     * 查询铁水包状态列表
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 铁水包状态集合
     */
    public List<ProductBlastFurnaceStatus> selectProductBlastFurnaceStatusList(ProductBlastFurnaceStatus productBlastFurnaceStatus);

    /**
     * 新增铁水包状态
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 结果
     */
    public int insertProductBlastFurnaceStatus(ProductBlastFurnaceStatus productBlastFurnaceStatus);

    /**
     * 修改铁水包状态
     * 
     * @param productBlastFurnaceStatus 铁水包状态
     * @return 结果
     */
    public int updateProductBlastFurnaceStatus(ProductBlastFurnaceStatus productBlastFurnaceStatus);

    /**
     * 批量删除铁水包状态
     * 
     * @param blastFurnaceStatusIds 需要删除的铁水包状态主键集合
     * @return 结果
     */
    public int deleteProductBlastFurnaceStatusByBlastFurnaceStatusIds(String blastFurnaceStatusIds);

    /**
     * 删除铁水包状态信息
     * 
     * @param blastFurnaceStatusId 铁水包状态主键
     * @return 结果
     */
    public int deleteProductBlastFurnaceStatusByBlastFurnaceStatusId(Long blastFurnaceStatusId);
}
